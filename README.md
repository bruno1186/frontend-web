# frontend-web

Aplicacao web moderna construida com React + TypeScript, utilizando o framework Next.js e estilizacao com Tailwind CSS. Projeto de referencia de frontend seguindo as principais praticas de mercado.

## Tecnologias

- React 18
- - TypeScript
  - - Next.js 14 (App Router, SSR e SSG)
    - - Tailwind CSS
      - - React Query (TanStack Query) para data fetching
        - - Zustand para gerenciamento de estado
          - - React Hook Form + Zod para formularios e validacao
            - - ESLint + Prettier
              - - Vitest e Testing Library
               
                - ## Estrutura de pastas
               
                - ```
                  frontend-web/
                    src/
                      app/            # rotas (App Router do Next.js)
                      components/     # componentes reutilizaveis de UI
                      hooks/          # custom hooks
                      lib/            # utilitarios e clientes de API
                      store/          # estado global (Zustand)
                      styles/         # estilos globais e Tailwind
                    public/           # assets estaticos
                    package.json
                    tailwind.config.ts
                    next.config.js
                  ```

                  ## Como rodar localmente

                  ```bash
                  # instalar dependencias
                  npm install

                  # iniciar em modo desenvolvimento
                  npm run dev
                  ```

                  A aplicacao sobe por padrao em `http://localhost:3000`.

                  ## Scripts principais

                  - `npm run dev` - modo desenvolvimento
                  - - `npm run build` - build de producao
                    - - `npm run start` - servir build de producao
                      - - `npm run lint` - analise estatica
                        - - `npm run test` - testes
                         
                          - ## Licenca
                         
                          - MIT
                          - 
