# dot

Site de página única que renderiza um fundo preto com pontinhos brancos aleatórios na tela inteira.

## Stack

- Next.js (App Router) + React + TypeScript em modo `strict`.
- Estilos em CSS puro (`app/globals.css`); evite adicionar dependências de UI, CSS ou estado além do React.

## Comandos

```bash
npm install       # instala dependências
npm run dev       # dev server em http://localhost:3000
npm run build     # build de produção
npm start         # serve o build de produção
```

Não invente comandos — se precisar de um script que não existe, adicione-o ao `package.json` antes.

## Arquitetura

- `app/layout.tsx` — root layout e `metadata` (Server Component).
- `app/page.tsx` — página única; só monta o componente visual.
- `components/dots.tsx` — `"use client"`; desenha os pontos num `<canvas>` via `useEffect`.
- `app/globals.css` — reset mínimo, tema escuro, `body` preto com `overflow: hidden`.

## Convenções

- Componentes interativos usam a diretiva `"use client"`; páginas/layout ficam como Server Components por padrão.
- Imports internos usam o alias `@/*` (mapeado para a raiz em `tsconfig.json`).
- TypeScript `strict` ligado; tipar props e refs explicitamente.
- Desenho no canvas considera `window.devicePixelRatio` (`ctx.setTransform`) para nitidez em telas retina e redesenha no evento `resize`; remova listeners no cleanup do efeito.
- Textos e comentários do projeto estão em português (pt-BR).
- Nunca editar `node_modules/`, `.next/` ou `next-env.d.ts` (gerados/ignorados pelo git).

## Escopo

Manter o projeto enxuto: apenas o efeito de pontos. Ideias que ampliem o escopo (rotas, API, estado global, dependências de UI) devem ser discutidas antes de serem adicionadas.
