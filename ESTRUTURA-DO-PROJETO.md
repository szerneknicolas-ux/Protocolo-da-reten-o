# Onde está cada parte do projeto

## Arquivos da landing page

- `index.html`: entrada principal do site. Precisa permanecer na raiz.
- `src/main.tsx`: inicia o React e abre a landing page.
- `src/paginas/LandingPage.tsx`: conteúdo e textos da landing page.
- `src/estilos/landing-page.css`: cores, fontes, alinhamentos e responsividade.
- `public/imagens-da-landing-page/`: imagens WebP otimizadas que aparecem na landing page.

## Arquivos técnicos

- `package.json`: dependências e comandos do projeto.
- `package-lock.json`: versões exatas das dependências.
- `vite.config.ts`: configuração do Vite.
- `tsconfig.json`: configuração do TypeScript.
- `.gitignore`: impede o envio de arquivos gerados ou privados ao GitHub.

## Arquivos que não fazem parte do site publicado

- `desnecessario/`: arquivos antigos e materiais de apoio que não participam do site e não devem ser enviados ao GitHub.
- `node_modules/`: dependências instaladas no computador; não enviar ao GitHub.
- `dist/`: versão gerada pelo comando de build; não enviar ao GitHub.

## Comandos

- `npm run dev`: abre o projeto para edição local.
- `npm run build`: gera a versão final na pasta `dist`.
- `npm run preview`: mostra localmente a versão gerada.
