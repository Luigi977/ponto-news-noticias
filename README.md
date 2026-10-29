# TCD(Desenvolvimento web): ponto-news-noticias

Portal de notícias pensado para leitura rápida e navegação simples.

## Autor
Luigi Gabriel Capela Avansi
 
## Fase 1(Wireframes): Funcionalidades
 
- Banner de destaque em carrossel
- Seção "Últimas Notícias" com alternância entre grade e lista
- Filtro por categoria e ordenação
- Lista das notícias mais lidas
- Busca e acesso ao perfil no topo da página
- Layout adaptável a diferentes tipos de tela

## Fase 2: construção da página no App.tsx com Tailwind CS

Nesta entrega, a página do PontoNews foi construída com React e TypeScript, usando as telas da Fase 1 como referência para desktop, tablet e mobile.

- Composição da página no `App.tsx`, com componentes para cabeçalho, filtros, conteúdo principal e notícias mais lidas.
- Layout responsivo com quatro colunas de notícias no desktop, três no tablet e duas no mobile.
- Filtros acima do destaque e seção "Mais lidas" ao final da página no mobile.
- Busca por título, filtro por categoria e ordenação por data ou visualizações.
- Marcação de favoritos durante a sessão e abertura de uma prévia das notícias.
- Carrossel das cinco notícias mais lidas, com alternância automática a cada 5 segundos, navegação manual e pausa.
- Ranking de notícias calculado pelas visualizações, incluindo o destaque principal, compartilhado entre o carrossel e a seção "Mais lidas".
- Inclusão de 13 imagens ilustrativas, salvas no projeto, com fontes documentadas em [docs/IMAGENS.md](docs/IMAGENS.md).
- Estilos centralizados no arquivo `src/index.css`.
- Compilação de produção validada com `npm run build`.

**Tecnologia de estilos utilizada:** apesar da referência a Tailwind no título desta fase, a implementação atual utiliza CSS tradicional em `src/index.css`; Tailwind CSS ainda não foi instalado ou utilizado.

As notícias são dados de demonstração. A alternância entre grade e lista e a autenticação de perfil previstas na Fase 1 ainda não foram implementadas. A conferência visual final no navegador também permanece pendente.

### Organização baseada no Cardápio React

A estrutura foi atualizada a partir do `cardapio-react.rar` da Área de Trabalho:

- `src/cases/news/components`: componentes de notícias, incluindo `NewsCard`, carrossel, prévia e lista das mais lidas.
- `src/cases/news/dtos`: tipos TypeScript e dados locais, seguindo o padrão do DTO de produtos.
- `src/cases/news/services`: serviço para consultar, filtrar e ordenar as notícias.
- `src/cases/news/hooks`: acesso ao serviço por `useNews` e `useMostReadNews`, como `useProducts` no cardápio.
- `App.tsx`: montagem da página, estado das interações e renderização dos cards com `.map()`.
- `components/layout`: cabeçalho e navegação compartilhados.
- `public/assets/img`: imagens locais.
- `index.css`: CSS mobile first, organizado por seções e com media queries `min-width`.
- React Compiler habilitado no Vite com o mesmo preset Babel utilizado no cardápio.

O carrossel, as 13 notícias, os filtros, os favoritos e o ranking por visualizações foram preservados. A comparação entre os arquivos está em [docs/IMPLEMENTACAO.md](docs/IMPLEMENTACAO.md).
