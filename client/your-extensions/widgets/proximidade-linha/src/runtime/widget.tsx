/** @jsx jsx */
import { React, jsx, type AllWidgetProps } from 'jimu-core'
import { JimuMapViewComponent, type JimuMapView, loadArcGISJSAPIModules } from 'jimu-arcgis'
import { Button, Alert, Badge } from 'jimu-ui'
import './styles.scss';

type Row = {
  layerTitle: string
  objectId: string | number
  distance: number
  unit: string
  geomType: string
}

const TXT = {
  needMap: 'Selecione um Map widget nas configurações.',
  needLine: 'Clique em uma FEIÇÃO DE LINHA no mapa para selecioná-la.',
  selected: (t: string, id?: string | number) => `Linha selecionada: ${t}${id != null ? ` (OID ${id})` : ''}. Defina o raio e clique “Aplicar”.`,
  calc: 'Calculando...',
  done: (n: number) => `Encontradas ${n} feições em camadas ativas dentro do raio.`,
  exportCsv: 'Exportar CSV',
  radiusKm: 'Raio (km):',
  apply: 'Aplicar'
}

export default function Widget (props: AllWidgetProps<any>) {
  const [jmv, setJmv] = React.useState<JimuMapView>()
  const [rows, setRows] = React.useState<Row[]>([])
  const [status, setStatus] = React.useState<string>(TXT.needLine)
  const [scannedLayersCount, setScannedLayersCount] = React.useState<number>(0)

  // Opções do Settings (mantidas): unidade p/ exibição e filtro por extent
  const unit: 'meters' | 'kilometers' = props.config?.unit || 'meters'
  const onlyInExtent: boolean = !!props.config?.onlyInExtent

  // Raio (km) definido pelo usuário (runtime)
  const [radiusKmInput, setRadiusKmInput] = React.useState<string>('5')
  const [radiusKm, setRadiusKm] = React.useState<number>(5)

  // Linha escolhida por clique + meta
  const selectedLineGeomRef = React.useRef<__esri.Geometry | null>(null)
  const selectedLineMetaRef = React.useRef<{ layerTitle: string; objectId?: string | number } | null>(null)

  // Layers de desenho (feedback visual)
  const selectionGLRef = React.useRef<__esri.GraphicsLayer | null>(null)
  const bufferGLRef = React.useRef<__esri.GraphicsLayer | null>(null)
  const resultsGLRef = React.useRef<__esri.GraphicsLayer | null>(null)

  // Módulos JSAPI (lazy)
  const modulesRef = React.useRef<any>({})
  const ensureModules = React.useCallback(async () => {
    if (modulesRef.current.geometryEngine) return modulesRef.current
    const [
      geometryEngine,
      projection,
      GraphicsLayer,
      Graphic
    ] = await loadArcGISJSAPIModules([
      'esri/geometry/geometryEngine',
      'esri/geometry/projection',
      'esri/layers/GraphicsLayer',
      'esri/Graphic'
    ])
    try { await projection.load?.() } catch {}
    modulesRef.current = { geometryEngine, projection, GraphicsLayer, Graphic }
    return modulesRef.current
  }, [])

  /** Cria os GraphicsLayers (uma vez) */
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
  }, [jmv, ensureModules])

  /** Desenha linha e buffer (limpa antes) */
  const drawSelectionAndBuffer = React.useCallback(async (line: __esri.Polyline, buffer?: __esri.Polygon) => {
    const { Graphic } = await ensureModules()
    await ensureGraphicLayers()

    selectionGLRef.current?.removeAll()
    bufferGLRef.current?.removeAll()

    // ⚠️ sem tipar como SimpleLineSymbolProperties (para aceitar 'type')
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
  }, [ensureModules, ensureGraphicLayers])

  /** Desenha pinos/centroides dos resultados */
  const drawResults = React.useCallback(async (features: __esri.Graphic[]) => {
    const { Graphic, geometryEngine } = await ensureModules()
    await ensureGraphicLayers()
    resultsGLRef.current?.removeAll()

    const pointSymbol = {
      type: 'simple-marker',
      color: [255, 102, 0, 0.9],
      size: 8,
      outline: { type: 'simple-line', color: [255, 255, 255, 1], width: 1 }
    } as any

    const toPoint = (g: __esri.Geometry) => {
      if (g.type === 'point') return g as __esri.Point
      if (geometryEngine?.centroid) return geometryEngine.centroid(g) as __esri.Point
      const ext = (g as any).extent
      return ext?.center || null
    }

    const pins: __esri.Graphic[] = []
    features.forEach(f => {
      const p = toPoint(f.geometry)
      if (p) pins.push(new Graphic({ geometry: p, symbol: pointSymbol as any }))
    })
    if (pins.length) resultsGLRef.current?.addMany(pins)
  }, [ensureModules, ensureGraphicLayers])

  /** Conecta a MapView e instala o handler de clique para escolher a LINHA por hitTest */
  const onActiveViewChange = (view: JimuMapView) => {
    setJmv(view)
    if (!view) return

    ensureGraphicLayers()

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
          selectionGLRef.current?.removeAll()
          bufferGLRef.current?.removeAll()
          resultsGLRef.current?.removeAll()
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
        selectedLineMetaRef.current = { layerTitle: layer?.title || 'Linha', objectId: oid }

        await drawSelectionAndBuffer(geom, undefined)
        setStatus(TXT.selected(layer?.title || 'Linha', oid))
      } catch (err) {
        console.error(err)
      }
    })
  }

  /** Botão “Aplicar”: cria buffer e dispara o cálculo; atualiza feedback visual */
  const onApplyRadius = async () => {
    const r = Math.max(0, Number(radiusKmInput) || 0)
    setRadiusKm(r)

    if (!jmv) return
    const geom = selectedLineGeomRef.current
    if (!geom) { setStatus(TXT.needLine); return }

    await computeProximity(geom)
  }

  /** Núcleo do cálculo (buffer geodésico + query + medição) + desenho do buffer e pinos */
  const computeProximity = async (selectedGeom: __esri.Geometry) => {
    try {
      if (!jmv) return
      setStatus(TXT.calc)

      const { geometryEngine, projection } = await ensureModules()
      const view = jmv.view as __esri.MapView

      // 1) Buffer geodésico (km)
      let searchArea = geometryEngine.geodesicBuffer(selectedGeom, radiusKm, 'kilometers') as __esri.Polygon
      if (Array.isArray(searchArea)) searchArea = searchArea[0]

      // 2) Restringe ao extent, se marcado
      if (onlyInExtent && view?.extent) {
        const inter = geometryEngine.intersect(searchArea, view.extent) as __esri.Polygon
        if (inter) searchArea = inter
      }

      // feedback: desenha linha + buffer
      await drawSelectionAndBuffer(selectedGeom as __esri.Polyline, searchArea)

      // 3) Função de medida
      const measure = (gA: __esri.Geometry, gB: __esri.Geometry) => {
        let A = gA, B = gB
        try {
          const sameSR =
            A.spatialReference?.wkid === B.spatialReference?.wkid ||
            A.spatialReference?.wkt === B.spatialReference?.wkt
          if (!sameSR) {
            const projB = projection.project(B, A.spatialReference) as __esri.Geometry
            if (projB) B = projB
          }
        } catch {}
        return geometryEngine.distance(A, B, unit)
      }

      // 4) Apenas FeatureLayers visíveis
      const layers = view.map.allLayers
        .toArray()
        .filter((ly: any) => ly.type === 'feature' && ly.visible) as __esri.FeatureLayer[]

      setScannedLayersCount(layers.length)

      const resultRows: Row[] = []
      const allFeatureGraphics: __esri.Graphic[] = []

      for (const layer of layers) {
        const oidField = layer.objectIdField
        const q = layer.createQuery()
        q.outFields = oidField ? [oidField] : ['*']
        q.returnGeometry = true
        q.geometry = searchArea
        q.spatialRelationship = 'intersects'

        const featSet = await layer.queryFeatures(q)
        allFeatureGraphics.push(...featSet.features)

        featSet.features.forEach((f) => {
          const d = measure(f.geometry, selectedGeom)
          if (d != null && isFinite(d)) {
            const rawOid =
              typeof (f as any).getObjectId === 'function'
                ? (f as any).getObjectId()
                : (f.attributes?.[oidField] ?? f.attributes?.OBJECTID)

            resultRows.push({
              layerTitle: layer.title,
              objectId: rawOid as string | number,
              distance: d,
              unit,
              geomType: f.geometry.type
            })
          }
        })
      }

      await drawResults(allFeatureGraphics)

      resultRows.sort((a, b) => a.distance - b.distance)
      setRows(resultRows)
      setStatus(TXT.done(resultRows.length))
    } catch (e) {
      console.error(e)
      setStatus('Erro ao calcular proximidade.')
    }
  }

  /** Exporta CSV */
  const exportCSV = () => {
    const header = 'Layer;OBJECTID;Geometry;Distance;Unit'
    const lines = rows.map(r => `${r.layerTitle};${r.objectId};${r.geomType};${r.distance.toFixed(2)};${r.unit}`)
    const blob = new Blob([[header, ...lines].join('\n')], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a'); a.href = url; a.download = 'proximidade.csv'; a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className="widget-proximidade-linha jimu-widget">
      {/* 1) Texto informativo (discreto, sem caixa) */}
      <div className="wpl-info-text">
        {status}
        {/* Se quiser quebrar em linhas, use <p> */}
        {/* <p>{status}</p> */}
        {/* <p>Defina o raio e clique “Aplicar”.</p> */}
      </div>

      {/* 2) Linha: Raio + Aplicar */}
      <div className="wpl-row wpl-radius-row">
        <label className="wpl-label">{TXT.radiusKm}</label>
        <input
          type="number"
          min={0}
          step={0.1}
          className="wpl-input"
          value={radiusKmInput}
          onChange={(e) => setRadiusKmInput(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter') onApplyRadius() }}
        />
        <Button
          className="wpl-btn-primary"
          onClick={onApplyRadius}
          disabled={!jmv}
        >
          {TXT.apply}
        </Button>
      </div>

      {/* 3) Contadores + 4) Exportar CSV */}
      <div className="wpl-row wpl-counters-row">
        <div className="wpl-counter" title="Camadas varridas">
          <span className="wpl-counter-label">Camadas:</span>
          <span className="wpl-counter-value">{scannedLayersCount}</span>
        </div>

        <div className="wpl-counter" title="Feições no resultado">
          <span className="wpl-counter-label">Feições:</span>
          <span className="wpl-counter-value">{rows.length}</span>
        </div>

        <div className="wpl-actions">
          <Button
            className="wpl-btn-ghost"
            onClick={exportCSV}
            disabled={!rows.length}
          >
            {TXT.exportCsv}
          </Button>
        </div>
      </div>

      {/* (Opcional) Map widget — mantém sua lógica atual */}
      {props.useMapWidgetIds?.length ? (
        <JimuMapViewComponent
          useMapWidgetId={props.useMapWidgetIds[0]}
          onActiveViewChange={onActiveViewChange}
        />
      ) : (
        <div className="wpl-need-map">{TXT.needMap}</div>
      )}

      {/* 5) Tabela de resultados */}
      <div className="wpl-table-wrap">
        <table className="table table-sm wpl-table">
          <thead>
            <tr>
              <th>Camada</th>
              <th>OBJECTID</th>
              <th>Geom</th>
              <th>Distância ({unit})</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={`${r.layerTitle}-${r.objectId}-${i}`}>
                <td>{r.layerTitle}</td>
                <td>{r.objectId}</td>
                <td>{r.geomType}</td>
                <td>{r.distance.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}