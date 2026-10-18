# ConnectFlight

Página inicial em React (Vite) baseada no protótipo do Figma, com três telas extras criadas a partir dos links do rodapé: **Destinos**, **Ofertas** e **Contato**.

## Como rodar

```bash
npm install
npm run dev
```

Abra http://localhost:5173. Para gerar a versão de produção: `npm run build`.

## Estrutura

```
src/
├── main.jsx / App.jsx        # entrada e rotas (react-router-dom)
├── styles/global.css         # variáveis de cor e fonte (Dosis)
├── data/pacotes.js           # dados de exemplo
├── components/
│   ├── Layout/               # estrutura comum (conteúdo + rodapé)
│   ├── Footer/               # links Destinos | Ofertas | Contato
│   ├── Wave/                 # onda decorativa
│   ├── Hero/                 # bloco principal da Home
│   ├── Illustration/         # ilustração em SVG
│   ├── PageHeader/           # título reutilizável das telas internas
│   ├── PacoteCard/           # card de pacote (props)
│   └── ContatoForm/          # formulário (useState)
└── pages/
    ├── Home/  Destinos/  Ofertas/  Contato/
```

## Conceitos aplicados

- Componentes funcionais reutilizáveis, props e `useState`
- Navegação entre páginas com `react-router-dom` (`NavLink` destaca a página ativa)
- CSS com Flexbox e Grid, layout responsivo
