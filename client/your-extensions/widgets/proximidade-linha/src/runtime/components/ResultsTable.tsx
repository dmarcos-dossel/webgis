import { React } from 'jimu-core'
import type { Row } from '../types'

interface ResultsTableProps {
  rows: Row[]
}

export const ResultsTable: React.FC<ResultsTableProps> = ({ rows }) => {
  return (
    <div className="wpl-table-wrap">
      <table className="table table-sm wpl-table">
        <thead>
          <tr>
            <th>Camada</th>
            <th>OBJECTID</th>
            <th>Geom</th>
            <th>Status</th>
            <th>Comprimento (km)</th>
            <th>Distância (m)</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={`${r.layerTitle}-${r.objectId}-${i}`}>
              <td>{r.layerTitle}</td>
              <td>{r.objectId}</td>
              <td>{r.geomType}</td>
              <td>{r.status}</td>
              <td>{r.lengthKm ? r.lengthKm.toFixed(2) : ''}</td>
              <td>{r.distanceM ? r.distanceM.toFixed(2) : ''}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
