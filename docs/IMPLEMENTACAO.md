# Adaptação do cardápio para PontoNews

O projeto usa React, TypeScript e Vite, seguindo a organização do `cardapio-react.rar`:

- `src/App.tsx`: composição do conteúdo principal, lista de cards e estado dos filtros, favoritos e prévia.
- `src/components/layout/header.tsx`: cabeçalho e busca.
- `src/components/layout/navigationBar.tsx`: mesmo padrão de propriedades `categories`, `activeCategory` e `onSelectCategory` do cardápio, com ordenação.
- `src/cases/news/components/news-card.tsx`: card reutilizável, equivalente ao `ProductCard`.
- `src/cases/news/components/news-carousel.tsx`: alternância automática das cinco notícias mais lidas a cada 5 segundos, com controles manuais e pausa.
- `src/cases/news/components/most-read.tsx`: seção lateral de notícias no lugar do pedido.
- `src/cases/news/components/news-preview.tsx`: prévia da notícia selecionada.
- `src/cases/news/components/news-image.tsx`: apresentação das fotos e tratamento de falha de carregamento.
- `src/data/categories.ts`: categorias no formato `alias` / `label` do original.
- `src/cases/news/dtos/news.ts`: tipo `News` e lista local de notícias, no mesmo padrão de `Product` e `products` do cardápio.
- `src/cases/news/dtos/news-image.ts`: tipo e metadados das imagens.
- `src/cases/news/dtos/news-filter.ts`: tipos dos filtros e da ordenação.
- `src/cases/news/services/news-service.ts`: consulta, filtragem, ordenação e ranking das notícias.
- `src/cases/news/hooks/use-news.ts`: funções `useNews` e `useMostReadNews`, que consultam o serviço, seguindo o padrão de `useProducts`.
- `public/assets/img`: imagens locais, no mesmo caminho de pastas do cardápio.
- `src/index.css`: estilos globais e layout responsivo.

## Técnicas aplicadas do arquivo da Área de Trabalho

| Cardápio React | PontoNews |
| --- | --- |
| `cases/products/components/product-card.tsx` | `cases/news/components/news-card.tsx` |
| `cases/products/dtos/product.ts` | `cases/news/dtos/news.ts` |
| `cases/products/services/product-service.ts` | `cases/news/services/news-service.ts` |
| `cases/products/hooks/use-product.ts` | `cases/news/hooks/use-news.ts` |
| `products.map()` no `App.tsx` | `news.map()` no `App.tsx` |
| `handleSelectCategory` com `useState` | Mesmo padrão, com funções nomeadas para as demais ações |
| `ProductCard` recebe `product` por propriedades | `NewsCard` recebe `news` e os callbacks das ações |
| React Compiler no Vite com preset Babel | Mesma integração, preservando as versões de React e Vite já usadas no PontoNews |

Os hooks consultam dados locais de forma síncrona, como o exemplo do cardápio. O serviço do PontoNews acrescenta as consultas necessárias aos filtros e ao ranking, sem ordenar diretamente o array original. Os componentes de notícias recebem os resultados por propriedades; o carrossel e a lateral usam a mesma lista obtida por `useMostReadNews`.

As imagens `ponto-news-desktop.png`, `ponto-news-tablet.png` e `ponto-news-mobile.png` são as referências visuais. O rodapé do restaurante não foi incluído porque não aparece nessas telas. O elemento `body` e o script externo presentes no App original foram omitidos: o documento já possui um body e as interações são controladas pelo React.

## Executar

```sh
npm install
npm run dev
```

No PowerShell com bloqueio de scripts, use `npm.cmd run dev`.

```sh
npm run build
```

## Comportamento

O CSS segue a abordagem mobile first do Cardápio React: as regras base atendem celulares, com filtros acima do destaque, duas colunas e Mais lidas no final. A partir de 768px (48rem), o tablet exibe três colunas e barra lateral de 200px. A partir de 1024px (64rem), o desktop exibe quatro colunas e barra lateral de 230px. Há um ajuste no cabeçalho a partir de 360px (22.5rem).

O `src/index.css` está organizado por comentários de seção: GENERICS, CABECHALHO, NAVEGAÇÃO, MAIN, DESTAQUE, NOTÍCIAS, SIDEBAR, PRÉVIA DA NOTÍCIA, IMAGENS e RESPONSIVIDADE. As propriedades são escritas uma por linha, e as media queries usam somente `min-width`.

Busca, categorias e ordenação funcionam com os dados locais. Os corações marcam favoritos durante a sessão. O botão Ler mais e os títulos abrem uma prévia; não há notícias completas ou autenticação conectadas. O ícone de perfil e o selo Grade reproduzem os elementos visuais da referência.

O ranking usa as visualizações de todas as notícias, incluindo o destaque principal, em ordem decrescente. A lista lateral e o carrossel compartilham `mostReadNews`, sem alterar a ordem dos cards. A rotação pausa ao passar o mouse ou manter o foco no carrossel e respeita a preferência de movimento reduzido. O botão Ler mais abre a notícia exibida no momento.

Validação: compilação TypeScript e build Vite concluídos. A comparação visual no navegador ficou pendente porque não havia navegador conectado à sessão.

## Imagens

As notícias usam 13 imagens locais pesquisadas no Pexels. O mapeamento está em `src/cases/news/dtos/news-image.ts` e as fontes estão em [IMAGENS.md](IMAGENS.md). Os espaços e as proporções do layout foram mantidos.
