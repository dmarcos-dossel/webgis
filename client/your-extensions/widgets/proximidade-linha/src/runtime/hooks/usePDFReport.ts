import { React } from 'jimu-core'
import { type JimuMapView } from 'jimu-arcgis'
import type { Row, ProximityConfig, SelectedLineMeta } from '../types'

// Função melhorada para gerar relatório profissional usando print do navegador
const generatePrintReport = async (
  jmv: JimuMapView,
  selectedLineMeta: SelectedLineMeta,
  rows: Row[],
  scannedLayersCount: number,
  radiusKm: number,
  config: ProximityConfig & { logoUrl?: string; useLocalLogo?: boolean; localLogoFile?: string }
): Promise<void> => {
  const now = new Date()

  // Capturar screenshot do mapa usando API nativa do ArcGIS
  let screenshotDataUrl = ''
  try {
    const screenshot = await jmv.view.takeScreenshot({
      format: 'png',
      quality: 85,
      width: 800,
      height: 600
    })
    screenshotDataUrl = screenshot.dataUrl
  } catch (error) {
    console.log('Erro ao capturar screenshot do mapa:', error)
  }

  // Filtrar dados
  const intersections = rows.filter(r => r.status === 'interseção')
  const proximities = rows.filter(r => r.status === 'dentro do buffer')

  // Criar conteúdo HTML profissional com cores da Dossel Ambiental
  const htmlContent = `
    <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 210mm; margin: 0 auto; padding: 15mm; background: white; color: #333;">
      <!-- Cabeçalho com logo à esquerda -->
      <header style="background: linear-gradient(135deg, #0d4d2a 0%, #1a5f3a 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; margin-bottom: 0; display: flex; align-items: center; gap: 20px;">
        ${(config.useLocalLogo && config.localLogoFile) ? `
        <div style="flex-shrink: 0;">
          <img src="${window.location.origin}/client/your-extensions/widgets/proximidade-linha/assets/images/${config.localLogoFile}" alt="Logo Dossel Ambiental" style="max-height: 70px; max-width: 150px; object-fit: contain; filter: brightness(0) invert(1);">
        </div>
        ` : config.logoUrl ? `
        <div style="flex-shrink: 0;">
          <img src="${config.logoUrl}" alt="Logo Institucional" style="max-height: 70px; max-width: 150px; object-fit: contain;">
        </div>
        ` : `
        <div style="flex-shrink: 0; width: 150px; height: 70px; background: rgba(255,255,255,0.1); border-radius: 8px; display: flex; align-items: center; justify-content: center;">
          <span style="color: rgba(255,255,255,0.8); font-weight: 600; font-size: 12px;">DOSSEL<br>AMBIENTAL</span>
        </div>
        `}
        <div style="flex: 1;">
          <h1 style="color: white; margin: 0; font-size: 22px; font-weight: 700; letter-spacing: 1px; text-shadow: 1px 1px 2px rgba(0,0,0,0.3);">
            RELATÓRIO DE PROXIMIDADE ÀS LINHAS DE ENERGIA
          </h1>
          <p style="margin: 5px 0 0 0; color: rgba(255,255,255,0.9); font-size: 13px; font-weight: 500;">
            Gerado em ${now.toLocaleDateString('pt-BR')} às ${now.toLocaleTimeString('pt-BR')}
          </p>
        </div>
      </header>

      <!-- Informações Principais -->
      <section style="margin: 0 0 25px 0; background: #f8f9fa; padding: 20px; border-radius: 0 0 8px 8px; border-left: 4px solid #0d4d2a; border-top: 1px solid #e0e0e0;">
        <h2 style="color: #0d4d2a; margin-top: 0; font-size: 18px; font-weight: 600;">PARÂMETROS DA ANÁLISE</h2>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-top: 15px;">
          <div>
            <strong style="color: #555;">Linha de Energia (Referência):</strong><br>
            <span style="font-size: 16px;">${selectedLineMeta.layerTitle}</span>
            ${selectedLineMeta.objectId ? `<br><small style="color: #666;">ID: ${selectedLineMeta.objectId}</small>` : ''}
          </div>
          <div>
            <strong style="color: #555;">Raio de Análise:</strong><br>
            <span style="font-size: 16px; color: #007acc; font-weight: 600;">${radiusKm} km</span>
            <br><small style="color: #666;">${config.useGeodesicDistance ? 'Distância Geodésica' : 'Distância Plana'}</small>
          </div>
        </div>
      </section>

      <!-- Screenshot do Mapa -->
      ${screenshotDataUrl ? `
      <section style="margin: 25px 0;">
        <h2 style="color: #0d4d2a; font-size: 18px; font-weight: 600; margin-bottom: 15px;">VISUALIZAÇÃO DA ÁREA ANALISADA</h2>
        <div style="text-align: center;">
          <img src="${screenshotDataUrl}" alt="Mapa da análise de proximidade às linhas de energia"
               style="max-width: 100%; height: auto; border: 2px solid #e0e0e0; border-radius: 8px; box-shadow: 0 4px 8px rgba(0,0,0,0.1);">
          <p style="font-size: 12px; color: #666; font-style: italic; margin-top: 10px; text-align: center;">
            Linha de energia selecionada | Buffer de análise | Pontos de interseção/proximidade
          </p>
        </div>
      </section>
      ` : ''}

      <!-- Resultados Consolidados -->
      <section style="margin: 25px 0;">
        <h2 style="color: #8b4513; font-size: 18px; font-weight: 600; margin-bottom: 15px;">RESUMO EXECUTIVO</h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 15px;">
          <div style="background: #e8f4fd; padding: 15px; border-radius: 8px; text-align: center; border: 1px solid #b3d9ff;">
            <div style="font-size: 28px; font-weight: 700; color: #007acc;">${rows.length}</div>
            <div style="font-size: 14px; color: #555; margin-top: 5px;">Feições Encontradas</div>
          </div>
          <div style="background: #ffeef0; padding: 15px; border-radius: 8px; text-align: center; border: 1px solid #ffb3ba;">
            <div style="font-size: 28px; font-weight: 700; color: #d9534f;">${intersections.length}</div>
            <div style="font-size: 14px; color: #555; margin-top: 5px;">Interseções Diretas</div>
          </div>
          <div style="background: #fff8e1; padding: 15px; border-radius: 8px; text-align: center; border: 1px solid #ffcc02;">
            <div style="font-size: 28px; font-weight: 700; color: #f0ad4e;">${proximities.length}</div>
            <div style="font-size: 14px; color: #555; margin-top: 5px;">No Raio de Segurança</div>
          </div>
          <div style="background: #f0f9ff; padding: 15px; border-radius: 8px; text-align: center; border: 1px solid #b3e5fc;">
            <div style="font-size: 28px; font-weight: 700; color: #0277bd;">${scannedLayersCount}</div>
            <div style="font-size: 14px; color: #555; margin-top: 5px;">Camadas Analisadas</div>
          </div>
        </div>
      </section>

      <!-- Detalhamento dos Resultados -->
      <section style="margin: 25px 0;">
        <h2 style="color: #a0522d; font-size: 18px; font-weight: 600; margin-bottom: 15px;">DETALHAMENTO DOS RESULTADOS</h2>

        ${intersections.length > 0 ? `
        <div style="margin-bottom: 20px;">
          <h3 style="color: #d9534f; font-size: 16px; font-weight: 600; margin-bottom: 10px;">🔴 INTERSEÇÕES DIRETAS COM LINHAS DE ENERGIA</h3>
          <div style="background: #fff5f5; border: 1px solid #fed7d7; border-radius: 8px; padding: 15px;">
            ${intersections.map((row, index) => `
              <div style="margin: 8px 0; padding: 8px; background: white; border-radius: 4px; border-left: 3px solid #d9534f;">
                <strong style="color: #d9534f;">${index + 1}. ${row.layerTitle}</strong>
                <span style="float: right; background: #d9534f; color: white; padding: 2px 8px; border-radius: 12px; font-size: 12px;">OID ${row.objectId}</span>
                <br style="clear: both;">
                ${row.lengthKm ? `<small style="color: #666;">Comprimento da interseção: <strong>${row.lengthKm.toFixed(2)} km</strong></small>` : ''}
              </div>
            `).join('')}
          </div>
        </div>
        ` : ''}

        ${proximities.length > 0 ? `
        <div style="margin-bottom: 20px;">
          <h3 style="color: #f0ad4e; font-size: 16px; font-weight: 600; margin-bottom: 10px;">🟡 FEIÇÕES NO RAIO DE SEGURANÇA DAS LINHAS</h3>
          <div style="background: #fffbf0; border: 1px solid #feebc8; border-radius: 8px; padding: 15px;">
            ${proximities.map((row, index) => `
              <div style="margin: 8px 0; padding: 8px; background: white; border-radius: 4px; border-left: 3px solid #f0ad4e;">
                <strong style="color: #f0ad4e;">${index + 1}. ${row.layerTitle}</strong>
                <span style="float: right; background: #f0ad4e; color: white; padding: 2px 8px; border-radius: 12px; font-size: 12px;">OID ${row.objectId}</span>
                <br style="clear: both;">
                ${row.distanceM ? `<small style="color: #666;">Distância até a linha de energia: <strong>${row.distanceM.toFixed(0)} metros</strong></small>` : ''}
              </div>
            `).join('')}
          </div>
        </div>
        ` : ''}
      </section>

      <!-- Rodapé Profissional com cores da empresa -->
      <footer style="margin-top: 40px; background: linear-gradient(135deg, #0d4d2a 0%, #1a5f3a 100%); color: white; padding: 25px; border-radius: 8px; text-align: center; font-size: 12px;">
        <div style="margin-bottom: 15px;">
          <strong style="font-size: 16px; color: white; text-shadow: 1px 1px 2px rgba(0,0,0,0.3);">DOSSEL AMBIENTAL</strong><br>
          <span style="color: rgba(255,255,255,0.9); font-weight: 500;">Soluções em Gestão Ambiental e Geoprocessamento</span>
        </div>
        <p style="margin: 5px 0; color: rgba(255,255,255,0.9);">
          <strong style="color: white;">Relatório de Proximidade às Linhas de Energia</strong><br>
          Widget desenvolvido com ArcGIS Experience Builder<br>
          Análise realizada com parâmetros de qualidade e precisão geográfica certificada
        </p>
        <div style="margin-top: 20px; font-size: 11px; color: rgba(255,255,255,0.7); border-top: 1px solid rgba(255,255,255,0.2); padding-top: 15px;">
          Este relatório foi gerado automaticamente pelo sistema de análise geoespacial da Dossel Ambiental
        </div>
      </footer>
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
      <title>Relatório de Proximidade às Linhas de Energia - ${now.toLocaleDateString('pt-BR')}</title>
      <style>
        @media print {
          body { margin: 0; }
          @page {
            margin: 15mm;
            /* Tentar forçar impressão sem cabeçalhos/rodapés */
            size: A4;
          }
          /* Garantir que elementos de fundo sejam impressos */
          * {
            -webkit-print-color-adjust: exact !important;
            color-adjust: exact !important;
          }
        }

        /* Ocultar instruções na impressão */
        @media print {
          #print-instructions { display: none !important; }
        }
      </style>
      <script>
        // Configurar opções de impressão por padrão
        window.onload = function() {
          // Aguardar um pouco para garantir que a página carregou completamente
          setTimeout(function() {
            try {
              // Mostrar instruções de impressão
              var instructions = document.getElementById('print-instructions');
              if (instructions) {
                instructions.style.display = 'block';
              }

              // Tentar configurar as opções de impressão automaticamente
              // Nota: Os navegadores modernos limitam o controle programático das configurações de impressão
              // por razões de segurança. As instruções visuais são a melhor abordagem.

              console.log('Página preparada para impressão com instruções visuais');

              // Adicionar listener para quando o usuário tentar imprimir
              window.onbeforeprint = function() {
                console.log('Iniciando impressão - verifique as configurações nas instruções');
              };

            } catch (e) {
              console.log('Erro ao configurar página de impressão:', e);
            }
          }, 200);
        };
      </script>
    </head>
    <body>
      ${htmlContent}
      <div id="print-instructions" style="position: fixed; bottom: 10px; right: 10px; background: #fff8dc; padding: 15px; border-radius: 8px; font-size: 13px; color: #8b4513; border: 2px solid #daa520; max-width: 320px; box-shadow: 0 4px 12px rgba(0,0,0,0.15); z-index: 10000;">
        <div style="font-weight: bold; color: #0d4d2a; margin-bottom: 8px; font-size: 14px;">📋 CONFIGURAÇÕES DE IMPRESSÃO</div>
        <div style="line-height: 1.4;">
          <strong style="color: #d9534f;">❌ Desmarque:</strong> "Cabeçalhos e rodapés"<br>
          <strong style="color: #28a745;">✅ Marque:</strong> "Elementos gráficos" ou "Backgrounds"<br>
          <strong style="color: #007bff;">🎯 Depois:</strong> Clique em "Imprimir"
        </div>
        <div style="margin-top: 8px; font-size: 11px; color: #666; border-top: 1px solid #daa520; padding-top: 8px;">
          💡 Essas configurações garantem que o relatório seja impresso corretamente com cores e logo.
        </div>
      </div>
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
    config: ProximityConfig & { logoUrl?: string; useLocalLogo?: boolean; localLogoFile?: string }
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
