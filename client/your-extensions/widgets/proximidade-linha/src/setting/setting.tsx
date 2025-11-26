/** @jsx jsx */
import { React, jsx, Immutable } from 'jimu-core'
import type { AllWidgetSettingProps } from 'jimu-for-builder'

// ✅ DataSourceTypes vem de jimu-core (ou use AllDataSourceTypes)
import { DataSourceTypes, type UseDataSource } from 'jimu-core'

// ✅ MapWidgetSelector, SettingSection/Row ficam em setting-components
import {
  MapWidgetSelector,
  SettingSection,
  SettingRow
} from 'jimu-ui/advanced/setting-components'

// ✅ DataSourceSelector tem seu próprio pacote "advanced/data-source-selector"
import { DataSourceSelector } from 'jimu-ui/advanced/data-source-selector'

import { Switch, Select } from 'jimu-ui'

// Configuração que vamos salvar no app config
interface Config {
  lineDsId?: string
  onlyVisible?: boolean
  onlyInExtent?: boolean
  unit?: 'meters' | 'kilometers'
}

export default function Setting (props: AllWidgetSettingProps<Config>) {
  const cfg = (props.config || {}) as Config
  const setCfg = (patch: Partial<Config>) =>
    props.onSettingChange({ id: props.id, config: { ...cfg, ...patch } })

  return (
    <div className="widget-setting-proximidade p-3">
      <SettingSection title="Mapa">
        <MapWidgetSelector
          useMapWidgetIds={props.useMapWidgetIds}
          onSelect={(ids) => props.onSettingChange({ id: props.id, useMapWidgetIds: ids })}
        />
      </SettingSection>

      <SettingSection title="Camada de Linhas (fonte de seleção)">
        <SettingRow>
          <DataSourceSelector
            widgetId={props.id}
            // Tipos aceitos: aqui só FeatureLayer
            types={Immutable([DataSourceTypes.FeatureLayer])}
            // Mostra a seleção atual (se houver)
            useDataSources={
              cfg.lineDsId ? Immutable([{ dataSourceId: cfg.lineDsId } as UseDataSource]) : Immutable([])
            }
            // Atualiza o config quando o usuário escolhe uma camada
            onChange={(useDses: UseDataSource[]) => setCfg({ lineDsId: useDses?.[0]?.dataSourceId })}
            // Obrigatório escolher uma fonte
            mustUseDataSource
          />
        </SettingRow>
      </SettingSection>

      <SettingSection title="Opções">
        <SettingRow label="Somente camadas visíveis">
          <Switch checked={!!cfg.onlyVisible} onChange={(_, v) => setCfg({ onlyVisible: v })} />
        </SettingRow>

        <SettingRow label="Somente feições no extent atual">
          <Switch checked={!!cfg.onlyInExtent} onChange={(_, v) => setCfg({ onlyInExtent: v })} />
        </SettingRow>

        <SettingRow label="Unidade de distância">
          <Select
            value={cfg.unit || 'meters'}
            onChange={(e) => setCfg({ unit: e.target.value as Config['unit'] })}
          >
            <option value="meters">Metros</option>
            <option value="kilometers">Quilômetros</option>
          </Select>
        </SettingRow>
      </SettingSection>
    </div>
  )
}