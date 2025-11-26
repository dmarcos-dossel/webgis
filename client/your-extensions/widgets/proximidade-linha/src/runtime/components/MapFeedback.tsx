import { React } from 'jimu-core'
import { type JimuMapView, loadArcGISJSAPIModules } from 'jimu-arcgis'
import type { FeatureWithPoints, IntersectionLine, SelectedLineMeta } from '../types'

interface MapFeedbackProps {
  jmv: JimuMapView | null
  selectedLineGeom: __esri.Geometry | null
  selectedLineMeta: SelectedLineMeta | null
  bufferGeom: __esri.Polygon | null
  featureWithPoints: FeatureWithPoints[]
  intersectionLines: IntersectionLine[]
}

let modulesRef: any = {}

const ensureModules = async () => {
  if (modulesRef.GraphicsLayer) return modulesRef
  const [
    GraphicsLayer,
    Graphic,
    Polyline,
    TextSymbol
  ] = await loadArcGISJSAPIModules([
    'esri/layers/GraphicsLayer',
    'esri/Graphic',
    'esri/geometry/Polyline',
    'esri/symbols/TextSymbol'
  ])
  modulesRef = { GraphicsLayer, Graphic, Polyline, TextSymbol }
  return modulesRef
}

export const MapFeedback: React.FC<MapFeedbackProps> = ({
  jmv,
  selectedLineGeom,
  selectedLineMeta,
  bufferGeom,
  featureWithPoints,
  intersectionLines
}) => {
  const selectionGLRef = React.useRef<__esri.GraphicsLayer | null>(null)
  const bufferGLRef = React.useRef<__esri.GraphicsLayer | null>(null)
  const resultsGLRef = React.useRef<__esri.GraphicsLayer | null>(null)
  const proximityLinesGLRef = React.useRef<__esri.GraphicsLayer | null>(null)

  const ensureGraphicLayers = React.useCallback(async () => {
    if (!jmv) return
    const { GraphicsLayer } = await ensureModules()
    const view = jmv.view as __esri.MapView
    const map = view.map

    if (!selectionGLRef.current) {
      selectionGLRef.current = new GraphicsLayer({ listMode: 'hide' })
      map.add(selectionGLRef.current)
    }
    if (!bufferGLRef.current) {
      bufferGLRef.current = new GraphicsLayer({ listMode: 'hide' })
      map.add(bufferGLRef.current)
    }
    if (!resultsGLRef.current) {
      resultsGLRef.current = new GraphicsLayer({ listMode: 'hide' })
      map.add(resultsGLRef.current)
    }
    if (!proximityLinesGLRef.current) {
      proximityLinesGLRef.current = new GraphicsLayer({ listMode: 'hide' })
      map.add(proximityLinesGLRef.current)
    }
  }, [jmv])

  const drawSelectionAndBuffer = React.useCallback(async (line: __esri.Polyline, buffer?: __esri.Polygon) => {
    const { Graphic } = await ensureModules()
    await ensureGraphicLayers()

    selectionGLRef.current?.removeAll()
    bufferGLRef.current?.removeAll()

    const lineSymbol = {
      type: 'simple-line',
      color: [0, 255, 255, 1],
      width: 3
    } as any

    selectionGLRef.current?.add(new Graphic({ geometry: line, symbol: lineSymbol as any }))

    if (buffer) {
      const fillSymbol = {
        type: 'simple-fill',
        color: [0, 255, 255, 0.12],
        outline: { type: 'simple-line', color: [0, 255, 255, 0.8], width: 1.5 }
      } as any

      bufferGLRef.current?.add(new Graphic({ geometry: buffer, symbol: fillSymbol as any }))
    }
  }, [ensureGraphicLayers])

  const drawResults = React.useCallback(async (featureWithPoints: FeatureWithPoints[], intersectionLines: IntersectionLine[]) => {
    const { Graphic, Polyline, TextSymbol } = await ensureModules()
    await ensureGraphicLayers()
    resultsGLRef.current?.removeAll()
    proximityLinesGLRef.current?.removeAll()

    const pointSymbol = {
      type: 'simple-marker',
      color: [255, 102, 0, 0.9],
      size: 8,
      outline: { type: 'simple-line', color: [255, 255, 255, 1], width: 1 }
    } as any

    const proximityLineSymbol = {
      type: 'simple-line',
      color: [255, 165, 0, 0.7],
      width: 2,
      style: 'dash'
    } as any

    const intersectionLineSymbol = {
      type: 'simple-line',
      color: [255, 0, 0, 0.9],
      width: 3
    } as any

    const textSymbol = {
      type: 'text',
      color: [0, 0, 0, 1],
      haloColor: [255, 255, 255, 1],
      haloSize: 1,
      font: { size: 10, family: 'Arial' },
      horizontalAlignment: 'center',
      verticalAlignment: 'middle'
    } as any

    const pins: __esri.Graphic[] = []
    const lines: __esri.Graphic[] = []
    const texts: __esri.Graphic[] = []

    featureWithPoints.forEach(({ pointOnFeature, pointOnLine, distanceM }) => {
      if (pointOnFeature) {
        pins.push(new Graphic({ geometry: pointOnFeature, symbol: pointSymbol as any }))
      }
      if (pointOnFeature && pointOnLine) {
        const lineGeom = new Polyline({
          paths: [[pointOnFeature.x, pointOnFeature.y], [pointOnLine.x, pointOnLine.y]],
          spatialReference: pointOnFeature.spatialReference
        })
        lines.push(new Graphic({ geometry: lineGeom, symbol: proximityLineSymbol as any }))

        const midX = (pointOnFeature.x + pointOnLine.x) / 2
        const midY = (pointOnFeature.y + pointOnLine.y) / 2
        const midPoint = { type: 'point', x: midX, y: midY, spatialReference: pointOnFeature.spatialReference } as __esri.Point
        const textSym = { ...textSymbol, text: distanceM?.toFixed(0) + ' m' } as any
        texts.push(new Graphic({ geometry: midPoint, symbol: textSym }))
      }
    })

    intersectionLines.forEach(({ line, lengthKm }) => {
      lines.push(new Graphic({ geometry: line, symbol: intersectionLineSymbol as any }))

      const extent = line.extent
      if (extent) {
        const center = extent.center
        const textSym = { ...textSymbol, text: lengthKm.toFixed(2) + ' km' } as any
        texts.push(new Graphic({ geometry: center, symbol: textSym }))
      }
    })

    if (pins.length) resultsGLRef.current?.addMany(pins)
    if (lines.length) proximityLinesGLRef.current?.addMany(lines)
    if (texts.length) resultsGLRef.current?.addMany(texts)
  }, [ensureGraphicLayers])

  // Efeitos para atualizar o mapa
  React.useEffect(() => {
    if (jmv) {
      ensureGraphicLayers()
    }
  }, [jmv, ensureGraphicLayers])

  React.useEffect(() => {
    if (selectedLineGeom && selectedLineMeta) {
      drawSelectionAndBuffer(selectedLineGeom as __esri.Polyline, bufferGeom || undefined)
    } else {
      selectionGLRef.current?.removeAll()
      bufferGLRef.current?.removeAll()
    }
  }, [selectedLineGeom, selectedLineMeta, bufferGeom, drawSelectionAndBuffer])

  React.useEffect(() => {
    drawResults(featureWithPoints, intersectionLines)
  }, [featureWithPoints, intersectionLines, drawResults])

  // Cleanup
  React.useEffect(() => {
    return () => {
      selectionGLRef.current?.removeAll()
      bufferGLRef.current?.removeAll()
      resultsGLRef.current?.removeAll()
      proximityLinesGLRef.current?.removeAll()
    }
  }, [])

  return null // Este componente não renderiza nada na UI, apenas gerencia o mapa
}
