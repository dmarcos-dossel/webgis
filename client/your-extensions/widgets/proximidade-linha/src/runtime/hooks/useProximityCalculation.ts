import { React } from 'jimu-core'
import { type JimuMapView, loadArcGISJSAPIModules } from 'jimu-arcgis'
import type { Row, FeatureWithPoints, IntersectionLine, SelectedLineMeta, ProximityConfig } from '../types'
import {
  createGeodesicBuffer,
  clipGeometry,
  checkIntersection,
  calculateLength,
  projectToViewSR,
  generateCandidates,
  getGeometryParts,
  measureDistance,
  toSeedPoint
} from '../utils/geometry'

export const useProximityCalculation = () => {
  const [isComputing, setIsComputing] = React.useState(false)
  const [rows, setRows] = React.useState<Row[]>([])
  const [scannedLayersCount, setScannedLayersCount] = React.useState<number>(0)
  const [bufferGeom, setBufferGeom] = React.useState<__esri.Polygon | null>(null)
  const [featureWithPoints, setFeatureWithPoints] = React.useState<FeatureWithPoints[]>([])
  const [intersectionLines, setIntersectionLines] = React.useState<IntersectionLine[]>([])

  const calculateProximity = React.useCallback(async (
    jmv: JimuMapView,
    selectedGeom: __esri.Geometry,
    selectedLineMeta: SelectedLineMeta,
    radiusKm: number,
    config: ProximityConfig
  ): Promise<Row[]> => {
    setIsComputing(true)
    setRows([])
    setFeatureWithPoints([])
    setIntersectionLines([])
    setBufferGeom(null)

    try {
      const view = jmv.view as __esri.MapView

      // 1) Criar buffer geodésico
      const searchArea = await createGeodesicBuffer(selectedGeom, radiusKm)
      setBufferGeom(searchArea)

      // 2) Filtrar camadas
      let layers = view.map.allLayers
        .toArray()
        .filter((ly: any) => ly.type === 'feature' && ly.visible) as __esri.FeatureLayer[]

      // Aplicar filtro por targetLayerIdsOrTitles se informado
      if (config.targetLayerIdsOrTitles.length > 0) {
        layers = layers.filter(ly =>
          config.targetLayerIdsOrTitles.includes(ly.id) ||
          config.targetLayerIdsOrTitles.includes(ly.title)
        )
      }

      // Excluir a camada da linha selecionada
      layers = layers.filter(ly => ly.id !== selectedLineMeta.layerId)
      setScannedLayersCount(layers.length)

      const resultRows: Row[] = []
      const allFeatureWithPoints: FeatureWithPoints[] = []
      const allIntersectionLines: IntersectionLine[] = []

      // 3) Processar cada camada
      for (const layer of layers) {
        const oidField = layer.objectIdField
        const q = layer.createQuery()
        q.outFields = oidField ? [oidField] : ['*']
        q.returnGeometry = true
        q.geometry = searchArea
        q.spatialRelationship = 'intersects'
        q.maxAllowableOffset = 0

        const featSet = await layer.queryFeatures(q)

        for (const f of featSet.features) {
          // Recortar geometria ao buffer
          const clippedGeom = await clipGeometry(f.geometry, searchArea)
          if (!clippedGeom) continue

          // Calcular pontos mais próximos usando geometryEngine.nearestCoordinate
          const [geometryEngine] = await loadArcGISJSAPIModules(['esri/geometry/geometryEngine'])

          let d = 0
          let pointOnFeature: __esri.Point | null = null
          let pointOnLine: __esri.Point | null = null

          const linePoints = generateCandidates(selectedGeom)
          let minDist = Infinity
          let bestNearest: any = null
          let bestPointOnLine: __esri.Point | null = null

          const parts = getGeometryParts(clippedGeom)
          for (const part of parts) {
            for (const linePoint of linePoints) {
              try {
                const nearest = geometryEngine.nearestCoordinate(part, linePoint)
                const dist = config.useGeodesicDistance && geometryEngine.geodesicDistance
                  ? geometryEngine.geodesicDistance(nearest.coordinate, linePoint, 'meters') as number
                  : geometryEngine.distance(nearest.coordinate, linePoint, 'meters')
                if (dist < minDist) {
                  minDist = dist
                  bestNearest = nearest
                  bestPointOnLine = linePoint
                }
              } catch {}
            }
          }

          if (bestNearest) {
            d = minDist
            pointOnFeature = bestNearest.coordinate
            pointOnLine = bestPointOnLine
          } else {
            // Fallback
            pointOnFeature = toSeedPoint(clippedGeom)
            pointOnLine = toSeedPoint(selectedGeom)
            if (pointOnFeature && pointOnLine) {
              d = measureDistance(pointOnFeature, pointOnLine, config.useGeodesicDistance, 'meters')
            }
          }

          // Obter OID
          const rawOid = getObjectId(f, oidField)

          // Projetar coordenadas para SR da view
          let xFeature: number | undefined
          let yFeature: number | undefined
          let xLine: number | undefined
          let yLine: number | undefined

          if (pointOnFeature && pointOnLine) {
            const viewSR = view.spatialReference
            const pfProj = await projectToViewSR(pointOnFeature, viewSR)
            const plProj = await projectToViewSR(pointOnLine, viewSR)
            xFeature = pfProj.x
            yFeature = pfProj.y
            xLine = plProj.x
            yLine = plProj.y
          }

          // Verificar interseção
          const intersects = await checkIntersection(selectedGeom, clippedGeom)
          const status: 'interseção' | 'dentro do buffer' = intersects ? 'interseção' : 'dentro do buffer'

          let lengthKm: number | undefined
          if (intersects && f.geometry.type === 'polygon') {
            const intersection = await clipGeometry(selectedGeom, f.geometry) as __esri.Polyline
            if (intersection) {
              lengthKm = await calculateLength(intersection, config.useGeodesicDistance)
              allIntersectionLines.push({ line: intersection, lengthKm })
            }
          } else if (pointOnFeature && pointOnLine) {
            allFeatureWithPoints.push({
              feature: f,
              pointOnFeature,
              pointOnLine,
              status,
              distanceM: !intersects ? d : undefined,
              lengthKm: intersects && f.geometry.type === 'polygon' ? lengthKm : undefined
            })
          }

          resultRows.push({
            layerTitle: layer.title,
            objectId: rawOid as string | number,
            geomType: f.geometry.type,
            status,
            lengthKm,
            distanceM: !intersects ? d : undefined,
            xFeature,
            yFeature,
            xLine,
            yLine
          })
        }
      }

      // Ordenar resultados
      resultRows.sort((a, b) => {
        if (a.status !== b.status) return a.status === 'interseção' ? -1 : 1
        if (a.lengthKm != null && b.lengthKm != null) return b.lengthKm - a.lengthKm
        if (a.distanceM != null && b.distanceM != null) return a.distanceM - b.distanceM
        return 0
      })

      setRows(resultRows)
      setFeatureWithPoints(allFeatureWithPoints)
      setIntersectionLines(allIntersectionLines)

      return resultRows
    } catch (error) {
      console.error('Erro no cálculo de proximidade:', error)
      throw error
    } finally {
      setIsComputing(false)
    }
  }, [])

  const clearResults = React.useCallback(() => {
    setRows([])
    setFeatureWithPoints([])
    setIntersectionLines([])
    setBufferGeom(null)
  }, [])

  return {
    isComputing,
    rows,
    scannedLayersCount,
    bufferGeom,
    featureWithPoints,
    intersectionLines,
    calculateProximity,
    clearResults
  }
}

// Funções auxiliares
const findNearestPoint = async (
  geom: __esri.Geometry,
  targetPoint: __esri.Point,
  useGeodesic: boolean
): Promise<{ coordinate: __esri.Point; distance: number }> => {
  // Esta é uma implementação simplificada
  // No código original, usa geometryEngine.nearestCoordinate
  const dist = measureDistance(geom, targetPoint, useGeodesic, 'meters')
  return { coordinate: targetPoint, distance: dist }
}

const getObjectId = (feature: __esri.Graphic, oidField: string): string | number => {
  if (typeof (feature as any).getObjectId === 'function') {
    return (feature as any).getObjectId()
  }
  return feature.attributes?.[oidField] ?? feature.attributes?.OBJECTID ?? 0
}
