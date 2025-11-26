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

import { Switch, Select, TextInput } from 'jimu-ui'

// Configuração que vamos salvar no app config
interface Config {
  lineDsId?: string
  onlyVisible?: boolean
  onlyInExtent?: boolean
  unit?: 'meters' | 'kilometers'
  logoUrl?: string
  useLocalLogo?: boolean
  localLogoFile?: string
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

      <SettingSection title="Relatório PDF">
        <SettingRow label="Usar logo local do projeto">
          <Switch checked={!!cfg.useLocalLogo} onChange={(_, v) => setCfg({ useLocalLogo: v })} />
        </SettingRow>

        {cfg.useLocalLogo ? (
          <SettingRow label="Arquivo de logo local">
            <Select
              value={cfg.localLogoFile || 'logo.png'}
              onChange={(e) => setCfg({ localLogoFile: e.target.value })}
            >
              <option value="logo.png">logo.png (padrão)</option>
              {/* Aqui podem ser adicionados mais arquivos de logo conforme necessário */}
            </Select>
          </SettingRow>
        ) : (
          <SettingRow label="URL do Logo Institucional">
            <TextInput
              value={cfg.logoUrl || ''}
              onChange={(e) => setCfg({ logoUrl: e.target.value })}
              placeholder="https://exemplo.com/logo.png"
            />
          </SettingRow>
        )}

        <div style={{ fontSize: '12px', color: '#666', marginTop: '8px' }}>
          {cfg.useLocalLogo
            ? 'O logo será carregado da pasta assets/images do widget.'
            : 'O logo será carregado da URL externa. Deixe vazio para usar espaço reservado.'
          }
        </div>
      </SettingSection>
    </div>
  )
}
