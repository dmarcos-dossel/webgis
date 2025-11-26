/** @jsx jsx */
import { React, jsx, Immutable, type ImmutableArray } from 'jimu-core'
import { MapWidgetSelector } from 'jimu-ui/advanced/setting-components'

export default function Setting (props: any) {
  // Fallback imutável correto quando ainda não há mapa selecionado
  const selected: ImmutableArray<string> =
    (props.useMapWidgetIds as ImmutableArray<string>) ?? Immutable([] as string[])

  const onSelect = (ids: string[]) => {
    props.onSettingChange({
      id: props.id,
      useMapWidgetIds: ids
    })
  }

  return (
    <div className='widget-setting p-3'>
      <h6>Mapa alvo</h6>
      <MapWidgetSelector
        useMapWidgetIds={selected}
        onSelect={onSelect}
      />
    </div>
  )
}