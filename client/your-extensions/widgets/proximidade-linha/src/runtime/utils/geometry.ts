import { loadArcGISJSAPIModules } from 'jimu-arcgis'

let modules: any = {}

const ensureModules = async () => {
  if (modules.geometryEngine) return modules
  const [
    geometryEngine,
    projection
  ] = await loadArcGISJSAPIModules([
    'esri/geometry/geometryEngine',
    'esri/geometry/projection'
  ])
  try { await projection.load?.() } catch {}
  modules = { geometryEngine, projection }
  return modules
}

export const toSeedPoint = (geom: __esri.Geometry): __esri.Point | null => {
  if (geom.type === 'point') return geom as __esri.Point
  const { geometryEngine } = modules
  if (geometryEngine?.centroid) return geometryEngine.centroid(geom) as __esri.Point
  const ext = (geom as any).extent
  return ext?.center || null
}

export const generateCandidates = (geom: __esri.Geometry): __esri.Point[] => {
  const candidates: __esri.Point[] = []
  const step = geom.spatialReference?.isGeographic ? 0.003 : 300 // approx 300m

  if (geom.type === 'point') {
    candidates.push(geom as __esri.Point)
  } else if (geom.type === 'polyline' || geom.type === 'polygon') {
    // vertices
    const paths = (geom as any).paths || (geom as any).rings
    if (paths) {
      for (const path of paths) {
        for (const pt of path) {
          candidates.push({ type: 'point', x: pt[0], y: pt[1], spatialReference: geom.spatialReference } as __esri.Point)
        }
      }
    }
    // densify
    const { geometryEngine } = modules
    try {
      const densified = geometryEngine.densify(geom, step)
      const dpaths = (densified as any).paths || (densified as any).rings
      if (dpaths) {
        for (const path of dpaths) {
          for (const pt of path) {
            candidates.push({ type: 'point', x: pt[0], y: pt[1], spatialReference: geom.spatialReference } as __esri.Point)
          }
        }
      }
    } catch {}
  }
  return candidates
}

export const getGeometryParts = (geom: __esri.Geometry): __esri.Geometry[] => {
  const parts: __esri.Geometry[] = []
  if (geom.type === 'point') {
    parts.push(geom)
  } else if (geom.type === 'polyline') {
    const paths = (geom as any).paths
    if (paths) {
      for (const path of paths) {
        parts.push({
          type: 'polyline',
          paths: [path],
          spatialReference: geom.spatialReference
        } as __esri.Polyline)
      }
    }
  } else if (geom.type === 'polygon') {
    const rings = (geom as any).rings
    if (rings) {
      for (const ring of rings) {
        parts.push({
          type: 'polygon',
          rings: [ring],
          spatialReference: geom.spatialReference
        } as __esri.Polygon)
      }
    }
  } else {
    parts.push(geom)
  }
  return parts
}

export const measureDistance = (
  gA: __esri.Geometry,
  gB: __esri.Geometry,
  useGeodesic: boolean,
  unit: 'meters' | 'kilometers' = 'meters'
): number => {
  const { geometryEngine, projection } = modules
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

  if (useGeodesic && geometryEngine.geodesicDistance) {
    return geometryEngine.geodesicDistance(A, B, unit) as number
  }
  return geometryEngine.distance(A, B, unit)
}

export const createGeodesicBuffer = async (
  geom: __esri.Geometry,
  radiusKm: number
): Promise<__esri.Polygon> => {
  await ensureModules()
  const { geometryEngine } = modules
  let buffer = geometryEngine.geodesicBuffer(geom, radiusKm, 'kilometers') as __esri.Polygon
  if (Array.isArray(buffer)) buffer = buffer[0]
  return buffer
}

export const clipGeometry = async (
  targetGeom: __esri.Geometry,
  clipGeom: __esri.Geometry
): Promise<__esri.Geometry | null> => {
  await ensureModules()
  const { geometryEngine } = modules
  const clipped = geometryEngine.intersect(targetGeom, clipGeom)
  if (!clipped || geometryEngine.isEmpty?.(clipped)) return null
  return clipped
}

export const checkIntersection = async (
  geomA: __esri.Geometry,
  geomB: __esri.Geometry
): Promise<boolean> => {
  await ensureModules()
  const { geometryEngine } = modules
  return geometryEngine.intersects(geomA, geomB)
}

export const calculateLength = async (
  geom: __esri.Geometry,
  useGeodesic: boolean,
  unit: 'kilometers' | 'meters' = 'kilometers'
): Promise<number> => {
  await ensureModules()
  const { geometryEngine } = modules
  if (useGeodesic) {
    return geometryEngine.geodesicLength(geom, unit) as number
  }
  return geometryEngine.planarLength(geom, unit) as number
}

export const projectToViewSR = async (
  point: __esri.Point,
  viewSR: __esri.SpatialReference
): Promise<__esri.Point> => {
  await ensureModules()
  const { projection } = modules
  return projection.project(point, viewSR) as __esri.Point
}
