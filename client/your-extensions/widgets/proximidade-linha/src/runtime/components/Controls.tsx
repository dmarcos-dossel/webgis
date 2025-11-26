import { React } from 'jimu-core'
import { Button, Loading } from 'jimu-ui'
import { TXT } from '../types'

interface ControlsProps {
  status: string
  radiusKmInput: string
  onRadiusChange: (value: string) => void
  onRadiusKeyDown: (e: React.KeyboardEvent) => void
  useGeodesicDistanceRuntime: boolean
  onGeodesicChange: (checked: boolean) => void
  onApply: () => void
  isComputing: boolean
  hasMap: boolean
}

export const Controls: React.FC<ControlsProps> = ({
  status,
  radiusKmInput,
  onRadiusChange,
  onRadiusKeyDown,
  useGeodesicDistanceRuntime,
  onGeodesicChange,
  onApply,
  isComputing,
  hasMap
}) => {
  return (
    <>
      {/* 1) Texto informativo (discreto, sem caixa) */}
      <div className="wpl-info-text">
        {status}
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
          onChange={(e) => onRadiusChange(e.target.value)}
          onKeyDown={onRadiusKeyDown}
        />
        <Button
          className="wpl-btn-primary"
          onClick={onApply}
          disabled={isComputing || !hasMap}
        >
          {isComputing ? <Loading /> : TXT.apply}
        </Button>
      </div>

      {/* Checkbox para geodésica */}
      <div className="wpl-row wpl-geodesic-row">
        <label>
          <input
            type="checkbox"
            checked={useGeodesicDistanceRuntime}
            onChange={(e) => onGeodesicChange(e.target.checked)}
          />
          Usar distância geodésica
        </label>
      </div>
    </>
  )
}
