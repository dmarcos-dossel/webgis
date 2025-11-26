/** @jsx jsx */
import { React, jsx, type AllWidgetProps } from 'jimu-core'
import { JimuMapViewComponent, type JimuMapView } from 'jimu-arcgis'
import { Controls, Counters, ResultsTable, MapFeedback } from './components'
import { useProximityCalculation } from './hooks/useProximityCalculation'
import { usePDFReport } from './hooks/usePDFReport'
import { TXT, type ProximityConfig, type SelectedLineMeta } from './types'
import './styles.scss'

export default function Widget(props: AllWidgetProps<any>) {
  const [jmv, setJmv] = React.useState<JimuMapView>()
  const [status, setStatus] = React.useState<string>(TXT.needLine)
  const [radiusKmInput, setRadiusKmInput] = React.useState<string>('5')
  const [useGeodesicDistanceRuntime, setUseGeodesicDistanceRuntime] = React.useState(false)

  // Linha escolhida por clique + meta
  const selectedLineGeomRef = React.useRef<__esri.Geometry | null>(null)
  const selectedLineMetaRef = React.useRef<SelectedLineMeta | null>(null)

  // Configuração do widget
  const config: ProximityConfig = {
    unit: props.config?.unit || 'meters',
    onlyInExtent: !!props.config?.onlyInExtent,
    useGeodesicDistance: !!props.config?.useGeodesicDistance,
    targetLayerIdsOrTitles: props.config?.targetLayerIdsOrTitles || []
  }

  // Hook personalizado para cálculos
  const {
    isComputing,
    rows,
    scannedLayersCount,
    bufferGeom,
    featureWithPoints,
    intersectionLines,
    calculateProximity,
    clearResults
  } = useProximityCalculation()

  // Hook para geração de relatório PDF
  const { isGenerating: isGeneratingPDF, generatePDFReport } = usePDFReport()

  // Handlers
  const handleRadiusChange = (value: string) => setRadiusKmInput(value)

  const handleRadiusKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleApply()
  }

  const handleGeodesicChange = (checked: boolean) => setUseGeodesicDistanceRuntime(checked)

  const handleApply = async () => {
    const radius = Math.max(0, Number(radiusKmInput) || 0)
    if (!jmv || !selectedLineGeomRef.current || !selectedLineMetaRef.current) return

    try {
      await calculateProximity(jmv, selectedLineGeomRef.current, selectedLineMetaRef.current, radius, {
        ...config,
        useGeodesicDistance: useGeodesicDistanceRuntime
      })
      setStatus(TXT.done(rows.length, useGeodesicDistanceRuntime))
    } catch (error) {
      console.error('Erro ao calcular proximidade:', error)
      setStatus('Erro ao calcular proximidade.')
    }
  }

  const handleExportCSV = () => {
    const header = 'Layer;OBJECTID;Geometry;Status;LengthKm;DistanceM;X_Feature;Y_Feature;X_Linha;Y_Linha'
    const lines = rows.map(r =>
      `${r.layerTitle};${r.objectId};${r.geomType};${r.status};${r.lengthKm?.toFixed(2) || ''};${r.distanceM?.toFixed(2) || ''};${r.xFeature?.toFixed(2) || ''};${r.yFeature?.toFixed(2) || ''};${r.xLine?.toFixed(2) || ''};${r.yLine?.toFixed(2) || ''}`
    )
    const blob = new Blob([[header, ...lines].join('\n')], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'proximidade.csv'
    a.click()
    URL.revokeObjectURL(url)
  }

  const handleExportPDF = async () => {
    if (!jmv || !selectedLineMetaRef.current || rows.length === 0) return

    const radius = Math.max(0, Number(radiusKmInput) || 0)
    await generatePDFReport(
      jmv,
      selectedLineMetaRef.current,
      rows,
      scannedLayersCount,
      radius,
      { ...config, useGeodesicDistance: useGeodesicDistanceRuntime }
    )
  }

  // Conecta a MapView e instala handler de clique
  const onActiveViewChange = (view: JimuMapView) => {
    setJmv(view)
    if (!view) return

    const mv = view.view as __esri.MapView
    mv.on('click', async (e) => {
      try {
        const res = await mv.hitTest(e)
        const hit = res.results.find((r: any) =>
          r.type === 'graphic' &&
          r.graphic?.geometry?.type === 'polyline' &&
          (r.graphic?.layer?.type === 'feature' || r.graphic?.layer)
        ) as any

        if (!hit) {
          selectedLineGeomRef.current = null
          selectedLineMetaRef.current = null
          setStatus(TXT.needLine)
          clearResults()
          return
        }

        const g = hit.graphic as __esri.Graphic
        const layer: any = g.layer
        const geom = g.geometry as __esri.Polyline
        const oidField = (layer?.objectIdField as string) || 'OBJECTID'
        const oid = typeof (g as any).getObjectId === 'function'
          ? (g as any).getObjectId()
          : g.attributes?.[oidField] ?? g.attributes?.OBJECTID

        selectedLineGeomRef.current = geom
        selectedLineMetaRef.current = {
          layerTitle: layer?.title || 'Linha',
          layerId: layer.id,
          objectId: oid
        }

        setStatus(TXT.selected(layer?.title || 'Linha', oid))
        clearResults()
      } catch (err) {
        console.error('Erro no clique:', err)
      }
    })
  }

  return (
    <div className="widget-proximidade-linha jimu-widget">
      <Controls
        status={status}
        radiusKmInput={radiusKmInput}
        onRadiusChange={handleRadiusChange}
        onRadiusKeyDown={handleRadiusKeyDown}
        useGeodesicDistanceRuntime={useGeodesicDistanceRuntime}
        onGeodesicChange={handleGeodesicChange}
        onApply={handleApply}
        isComputing={isComputing}
        hasMap={!!jmv}
      />

      <Counters
        scannedLayersCount={scannedLayersCount}
        rows={rows}
        onExportCSV={handleExportCSV}
        onExportPDF={handleExportPDF}
        isGeneratingPDF={isGeneratingPDF}
      />

      <ResultsTable rows={rows} />

      {/* Map widget */}
      {props.useMapWidgetIds?.length ? (
        <JimuMapViewComponent
          useMapWidgetId={props.useMapWidgetIds[0]}
          onActiveViewChange={onActiveViewChange}
        />
      ) : (
        <div className="wpl-need-map">{TXT.needMap}</div>
      )}

      {/* Componente de feedback visual no mapa */}
      <MapFeedback
        jmv={jmv}
        selectedLineGeom={selectedLineGeomRef.current}
        selectedLineMeta={selectedLineMetaRef.current}
        bufferGeom={bufferGeom}
        featureWithPoints={featureWithPoints}
        intersectionLines={intersectionLines}
      />
    </div>
  )
}
