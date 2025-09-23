
# WebGIS - Projeto ArcGIS Experience Builder

Este repositório contém um projeto baseado no [ArcGIS Experience Builder Developer Edition](https://developers.arcgis.com/experience-builder/), estruturado com as pastas `client` e `server`.

## 📁 Estrutura do Projeto

```
webgis/
├── client/               # Frontend do Experience Builder (widgets, temas, templates)
│   ├── your-extensions/  # Seus widgets e temas personalizados
│   └── public/           # Assets públicos e uploads
├── server/               # Backend (serviços customizados, extensões)
│   ├── src/              # Código-fonte do servidor
│   └── uploads/          # Arquivos gerados em tempo de execução
├── .gitignore            # Arquivos e pastas ignoradas pelo Git
├── .gitattributes        # Padronização de quebras de linha (CRLF/LF)
├── package.json          # Dependências e scripts do projeto
├── package-lock.json     # Lockfile para reprodutibilidade
└── README.md             # Este arquivo
```

## ✅ Requisitos

- Node.js (versão compatível com o Experience Builder)
- ArcGIS Experience Builder Developer Edition instalado

## ⚙️ Instalação

Na raiz do projeto, execute:

```bash
npm ci
```

Esse comando instala as dependências exatamente conforme o `package-lock.json`, garantindo consistência entre ambientes.

## 🚀 Execução

Para iniciar o servidor de desenvolvimento:

```bash
npm start
```

O Experience Builder será iniciado e você poderá acessar a interface web para editar e visualizar seus aplicativos.

## 🔐 Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto com suas configurações locais. Exemplo:

```env
ARCGIS_PORT=3001
ARCGIS_API_KEY=your-api-key
```

Nunca versionar o `.env` com dados sensíveis. Mantenha um `.env.example` com os nomes das variáveis esperadas.

## 📦 Boas Práticas de Versionamento

- **Não versionar `node_modules/`, `dist/`, `temp/` e arquivos gerados automaticamente.**
- **Manter o `package-lock.json`** para garantir reprodutibilidade.
- **Utilizar `.gitignore` e `.gitattributes`** para manter o repositório limpo e compatível entre sistemas.

## 🧩 Observações

- Este projeto depende do ArcGIS Experience Builder Developer Edition. Certifique-se de que ele está instalado e configurado corretamente.
- Os widgets e temas personalizados devem ser colocados em `client/your-extensions/`.
- Os serviços customizados devem estar em `server/src/`.

---

© 2025 Dossel Ambiental
