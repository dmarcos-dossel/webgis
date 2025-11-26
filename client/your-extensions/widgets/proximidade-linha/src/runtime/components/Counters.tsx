import { React } from 'jimu-core'
import { Button, Loading } from 'jimu-ui'
import { TXT } from '../types'
import type { Row } from '../types'

interface CountersProps {
  scannedLayersCount: number
  rows: Row[]
  onExportCSV: () => void
  onExportPDF?: () => void
  isGeneratingPDF?: boolean
}

export const Counters: React.FC<CountersProps> = ({
  scannedLayersCount,
  rows,
  onExportCSV,
  onExportPDF,
  isGeneratingPDF = false
}) => {
  return (
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
          onClick={onExportCSV}
          disabled={!rows.length}
        >
          {TXT.exportCsv}
        </Button>

        {onExportPDF && (
          <Button
            className="wpl-btn-ghost"
            onClick={onExportPDF}
            disabled={!rows.length || isGeneratingPDF}
            style={{ marginLeft: '8px' }}
          >
            {isGeneratingPDF ? <Loading /> : '📄 Relatório PDF'}
          </Button>
        )}
      </div>
    </div>
  )
