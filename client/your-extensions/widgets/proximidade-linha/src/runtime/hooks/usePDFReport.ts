import { React } from 'jimu-core'
import { type JimuMapView } from 'jimu-arcgis'
import type { Row, ProximityConfig, SelectedLineMeta } from '../types'

// Função simplificada para gerar relatório usando print do navegador
const generatePrintReport = async (
  jmv: JimuMapView,
  selectedLineMeta: SelectedLineMeta,
  rows: Row[],
  scannedLayersCount: number,
  radiusKm: number,
  config: ProximityConfig
): Promise<void> => {
  const now = new Date()

  // Capturar screenshot do mapa usando API nativa do ArcGIS
  let screenshotDataUrl = ''
  try {
    const screenshot = await jmv.view.takeScreenshot({
      format: 'png',
      quality: 80,
      width: 800,
      height: 600
    })
    screenshotDataUrl = screenshot.dataUrl
  } catch (error) {
    console.log('Erro ao capturar screenshot do mapa:', error)
    // Fallback para continuar sem imagem
  }

  // Filtrar dados
  const intersections = rows.filter(r => r.status === 'interseção')
  const proximities = rows.filter(r => r.status === 'dentro do buffer')

  // Criar conteúdo HTML
  const htmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px;">
      <h1 style="color: #333; text-align: center; border-bottom: 2px solid #007acc; padding-bottom: 10px;">
        RELATÓRIO DE PROXIMIDADE À LINHA
      </h1>

      <p style="text-align: center; color: #666; font-size: 14px;">
        Gerado em: ${now.toLocaleString('pt-BR')}
      </p>

      <div style="margin: 30px 0; padding: 15px; background: #f8f9fa; border-radius: 5px;">
        <h2 style="color: #007acc; margin-top: 0;">1. INFORMAÇÕES GERAIS</h2>
        <ul style="line-height: 1.6;">
          <li><strong>Linha selecionada:</strong> ${selectedLineMeta.layerTitle}</li>
          <li><strong>ID da feição:</strong> ${selectedLineMeta.objectId || 'N/A'}</li>
          <li><strong>Raio de análise:</strong> ${radiusKm} km</li>
          <li><strong>Camadas analisadas:</strong> ${scannedLayersCount}</li>
          <li><strong>Feições encontradas:</strong> ${rows.length}</li>
          <li><strong>Tipo de distância:</strong> ${config.useGeodesicDistance ? 'Geodésica' : 'Plana'}</li>
        </ul>
      </div>

      ${screenshotDataUrl ? `
      <div style="margin: 30px 0;">
        <h2 style="color: #007acc;">2. VISUALIZAÇÃO DO MAPA</h2>
        <img src="${screenshotDataUrl}" alt="Mapa da análise de proximidade" style="max-width: 100%; height: auto; border: 1px solid #ccc; border-radius: 5px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
        <p style="font-size: 12px; color: #666; font-style: italic; margin-top: 8px; text-align: center;">
          Captura do mapa mostrando: linha selecionada (ciano), buffer de análise e pontos de proximidade/interseção
        </p>
      </div>
      ` : `
      <div style="margin: 30px 0; padding: 15px; background: #fff3cd; border: 1px solid #ffeaa7; border-radius: 5px;">
        <h2 style="color: #856404; margin-top: 0;">2. VISUALIZAÇÃO DO MAPA</h2>
        <p style="margin: 10px 0; color: #856404;">
          <strong>Nota:</strong> Para visualizar o mapa com a linha selecionada, buffer e pontos de interseção/proximidade,
          consulte a interface principal do widget no ArcGIS Experience Builder.
        </p>
      </div>
      `}

      <div style="margin: 30px 0;">
        <h2 style="color: #007acc;">3. RESULTADOS DETALHADOS</h2>

        ${intersections.length > 0 ? `
        <h3 style="color: #d9534f;">3.1 INTERSEÇÕES COM A LINHA</h3>
        <div style="margin: 15px 0;">
          ${intersections.map((row, index) => `
            <div style="margin: 10px 0; padding: 10px; background: #fff5f5; border-left: 4px solid #d9534f; border-radius: 3px;">
              <strong>${index + 1}. ${row.layerTitle} - OID ${row.objectId}</strong><br>
              ${row.lengthKm ? `<span style="margin-left: 15px;">Comprimento da interseção: ${row.lengthKm.toFixed(2)} km</span><br>` : ''}
              <span style="margin-left: 15px;">Tipo de geometria: ${row.geomType}</span>
            </div>
          `).join('')}
        </div>
        ` : ''}

        ${proximities.length > 0 ? `
        <h3 style="color: #f0ad4e;">3.2 FEIÇÕES DENTRO DO BUFFER</h3>
        <div style="margin: 15px 0;">
          ${proximities.map((row, index) => `
            <div style="margin: 10px 0; padding: 10px; background: #fffbf0; border-left: 4px solid #f0ad4e; border-radius: 3px;">
              <strong>${index + 1}. ${row.layerTitle} - OID ${row.objectId}</strong><br>
              ${row.distanceM ? `<span style="margin-left: 15px;">Distância até a linha: ${row.distanceM.toFixed(2)} metros</span><br>` : ''}
              <span style="margin-left: 15px;">Tipo de geometria: ${row.geomType}</span>
            </div>
          `).join('')}
        </div>
        ` : ''}
      </div>

      <div style="margin: 30px 0; padding: 15px; background: #f8f9fa; border-radius: 5px;">
        <h2 style="color: #007acc; margin-top: 0;">4. ESTATÍSTICAS RESUMIDAS</h2>
        <ul style="line-height: 1.8;">
          <li>Total de feições analisadas: <strong>${rows.length}</strong></li>
          <li>Interseções diretas: <strong>${intersections.length}</strong></li>
          <li>Feições dentro do buffer: <strong>${proximities.length}</strong></li>
          <li>Camadas processadas: <strong>${scannedLayersCount}</strong></li>
          <li>Raio de análise: <strong>${radiusKm} km</strong></li>
        </ul>
      </div>

      <div style="text-align: center; margin-top: 50px; padding-top: 20px; border-top: 1px solid #ccc; color: #666; font-size: 12px;">
        Relatório gerado pelo Widget de Proximidade até Linha - ArcGIS Experience Builder
      </div>
    </div>
  `

  // Criar e abrir janela de impressão
  const printWindow = window.open('', '_blank', 'width=900,height=700')
  if (!printWindow) {
    alert('Por favor, permita popups para gerar o relatório.')
    return
  }

  printWindow.document.open()
  printWindow.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Relatório de Proximidade - ${now.toLocaleDateString('pt-BR')}</title>
      <style>
        @media print {
          body { margin: 0; }
          @page { margin: 15mm; }
        }
      </style>
    </head>
    <body>
      ${htmlContent}
    </body>
    </html>
  `)
  printWindow.document.close()

  // Aguardar carregamento e imprimir
  printWindow.onload = () => {
    setTimeout(() => {
      printWindow.print()
      printWindow.close()
    }, 500)
  }
}

export const usePDFReport = () => {
  const [isGenerating, setIsGenerating] = React.useState(false)

  const generatePDFReport = React.useCallback(async (
    jmv: JimuMapView,
    selectedLineMeta: SelectedLineMeta,
    rows: Row[],
    scannedLayersCount: number,
    radiusKm: number,
    config: ProximityConfig
  ): Promise<void> => {
    setIsGenerating(true)
    try {
      await generatePrintReport(jmv, selectedLineMeta, rows, scannedLayersCount, radiusKm, config)
    } catch (error) {
      console.error('Erro ao gerar relatório:', error)
      alert('Erro ao gerar o relatório. Verifique o console para mais detalhes.')
    } finally {
      setIsGenerating(false)
    }
  }, [])

  return {
    isGenerating,
    generatePDFReport
  }
}
