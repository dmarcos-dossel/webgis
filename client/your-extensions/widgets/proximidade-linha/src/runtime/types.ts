export type Row = {
  layerTitle: string
  objectId: string | number
  geomType: string
  status: 'interseção' | 'dentro do buffer'
  lengthKm?: number
  distanceM?: number
  xFeature?: number
  yFeature?: number
  xLine?: number
  yLine?: number
}

export type FeatureWithPoints = {
  feature: __esri.Graphic,
  pointOnFeature: __esri.Point,
  pointOnLine: __esri.Point,
  distanceM?: number,
  lengthKm?: number,
  status: 'interseção' | 'dentro do buffer'
}

export type IntersectionLine = {
  line: __esri.Polyline,
  lengthKm: number
}

export type SelectedLineMeta = {
  layerTitle: string;
  layerId: string;
  objectId?: string | number;
}

export type ProximityConfig = {
  unit: 'meters' | 'kilometers'
  onlyInExtent: boolean
  useGeodesicDistance: boolean
  targetLayerIdsOrTitles: string[]
}

export const TXT = {
  needMap: 'Selecione um Map widget nas configurações.',
  needLine: 'Clique em uma FEIÇÃO DE LINHA no mapa para selecioná-la.',
  selected: (t: string, id?: string | number) => `Linha selecionada: ${t}${id != null ? ` (OID ${id})` : ''}. Defina o raio e clique "Aplicar".`,
  calc: 'Calculando...',
  done: (n: number, geodesic?: boolean) => geodesic ? `Encontradas ${n} feições em camadas ativas dentro do raio (distância geodésica).` : `Encontradas ${n} feições em camadas ativas dentro do raio.`,
  exportCsv: 'Exportar CSV',
  radiusKm: 'Raio (km):',
  apply: 'Aplicar'
}
