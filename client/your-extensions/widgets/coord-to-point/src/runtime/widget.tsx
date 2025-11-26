/** @jsx jsx */
import { React, jsx, AllWidgetProps } from 'jimu-core'
import { JimuMapViewComponent, loadArcGISJSAPIModules, JimuMapView } from 'jimu-arcgis'

const GLAYER_ID = 'coord-to-point-layer'

export default function Widget (props: AllWidgetProps<any>) {
  const [lat, setLat] = React.useState('')
  const [lon, setLon] = React.useState('')
  const [jmv, setJmv] = React.useState<JimuMapView | null>(null)
  const [busy, setBusy] = React.useState(false)

  const parse = (s: string) => Number(String(s).trim().replace(',', '.'))
  const mapSelected = !!props.useMapWidgetIds?.length

  // Garante uma GraphicsLayer com renderer simples (círculo vermelho)
  const ensureLayer = React.useCallback(async (): Promise<__esri.GraphicsLayer | null> => {
    const view = jmv?.view
    if (!view) return null

    let layer = view.map.findLayerById(GLAYER_ID) as __esri.GraphicsLayer
    if (layer) return layer

    const [GraphicsLayer] = await loadArcGISJSAPIModules(['esri/layers/GraphicsLayer'])
    layer = new GraphicsLayer({
      id: GLAYER_ID,
      renderer: {
        type: 'simple',
        symbol: {
          type: 'simple-marker',
          style: 'circle',
          size: 10,
          color: [230, 0, 0, 0.85],
          outline: { color: [255, 255, 255, 1], width: 1.5 }
        }
      } as __esri.SimpleRendererProperties
    })
    view.map.add(layer)
    return layer
  }, [jmv])

  const go = async () => {
    const latNum = parse(lat)
    const lonNum = parse(lon)
    if (!isFinite(latNum) || latNum < -90 || latNum > 90) { console.warn('Latitude inválida'); return }
    if (!isFinite(lonNum) || lonNum < -180 || lonNum > 180) { console.warn('Longitude inválida'); return }
    if (!jmv?.view) { console.warn('Mapa não está pronto'); return }

    try {
      setBusy(true)
      const layer = await ensureLayer()
      if (!layer) return

      // Carrega os módulos sob demanda, evitando problemas de timing
      const [Graphic, Point] = await loadArcGISJSAPIModules([
        'esri/Graphic',
        'esri/geometry/Point'
      ])

      layer.removeAll()

      const point = new Point({
        longitude: lonNum,
        latitude: latNum,
        spatialReference: { wkid: 4326 }
      })

      // Como a layer tem renderer, não precisamos passar symbol aqui
      const graphic = new Graphic({ geometry: point })
      layer.add(graphic)

      await jmv.view.goTo({ target: graphic, zoom: Math.max(jmv.view.zoom ?? 12, 16) }).catch(() => {})
    } catch (e) {
      console.error('Erro ao posicionar no ponto:', e)
    } finally {
      setBusy(false)
    }
  }

  const clear = () => {
    setLat(''); setLon('')
    const layer = jmv?.view?.map?.findLayerById(GLAYER_ID) as __esri.GraphicsLayer
    layer?.removeAll()
  }

  return (
    <div className='p-2'>
      <div style={{ fontWeight: 600, marginBottom: 8 }}>Coordenada → Ponto</div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
        <input
          className='jimu-input'
          placeholder='Latitude (°)'
          value={lat}
          onChange={(e) => setLat(e.currentTarget.value)}
          onKeyDown={(e) => { if (e.key === 'Enter') go() }}
        />
        <input
          className='jimu-input'
          placeholder='Longitude (°)'
          value={lon}
          onChange={(e) => setLon(e.currentTarget.value)}
          onKeyDown={(e) => { if (e.key === 'Enter') go() }}
        />
      </div>

      <div style={{ marginTop: 8, display: 'flex', gap: 8 }}>
        <button className='btn btn-primary' onClick={go} disabled={!mapSelected || busy}>
          {busy ? 'Indo…' : 'Ir'}
        </button>
        <button className='btn btn-secondary' onClick={clear}>Limpar</button>
      </div>

      {mapSelected ? (
        <JimuMapViewComponent
          useMapWidgetId={props.useMapWidgetIds![0]}
          onActiveViewChange={(view) => setJmv(view ?? null)}
        />
      ) : (
        <div style={{ fontSize: 12, opacity: .7, marginTop: 8 }}>
          Selecione um Map na aba <strong>Content</strong> do widget.
        </div>
      )}
    </div>
  )
}