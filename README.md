# frontend-web

Aplicacao web em React + TypeScript com Next.js 14 (App Router) e Tailwind CSS. Consome a API de usuarios (backend-api) via TanStack Query.

## Stack

- React 18, TypeScript
- Next.js 14 (App Router)
- Tailwind CSS
- TanStack Query (data fetching)

## Estrutura

```
src/
  app/
    layout.tsx        # layout raiz
    providers.tsx     # QueryClientProvider
    page.tsx          # pagina inicial (lista de usuarios)
    globals.css       # estilos globais + Tailwind
  components/
    Button.tsx        # componente de UI reutilizavel
  hooks/
    useUsers.ts       # hook de data fetching (TanStack Query)
next.config.mjs
tailwind.config.ts
postcss.config.mjs
tsconfig.json
```

## Como rodar

```
npm install
npm run dev
```

Aplicacao em `http://localhost:3000`. Por padrao consome a API em `http://localhost:3000/api` (backend-api); ajuste a URL base em `src/hooks/useUsers.ts` conforme o ambiente.

## Scripts

- `npm run dev` - desenvolvimento
- `npm run build` - build de producao
- `npm run start` - servir build
- `npm run lint` - analise estatica

## Licenca

MIT
