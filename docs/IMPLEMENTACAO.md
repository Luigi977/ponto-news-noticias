# Adaptação do cardápio para PontoNews

O projeto usa React, TypeScript e Vite, seguindo a organização do `cardapio-react.rar`:

- `src/App.tsx`: composição da página e estado dos filtros.
- `src/components/layout/header.tsx`: cabeçalho e busca.
- `src/components/layout/navigationBar.tsx`: mesmo padrão de propriedades `categories`, `activeCategory` e `onSelectCategory` do cardápio, com ordenação.
- `src/components/layout/main.tsx`: destaque e cards de notícias no lugar dos produtos.
- `src/components/layout/mostRead.tsx`: seção lateral de notícias no lugar do pedido.
- `src/data/categories.ts`: categorias no formato `alias` / `label` do original.
- `src/data/news.ts`: conteúdo e degradês das telas fornecidas.
- `src/index.css`: estilos globais e layout responsivo.

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

Desktop: quatro colunas e barra lateral de 230px. Tablet: três colunas e barra lateral de 200px. Mobile (até 600px): filtros acima do destaque, duas colunas e Mais lidas no final.

Busca, categorias e ordenação funcionam com os dados locais. Os corações marcam favoritos durante a sessão. O botão Ler mais e os títulos abrem uma prévia; não há notícias completas ou autenticação conectadas. O ícone de perfil e o selo Grade reproduzem os elementos visuais da referência.

Validação: compilação TypeScript e build Vite concluídos. A comparação visual no navegador ficou pendente porque não havia navegador conectado à sessão.

## Imagens

As not?cias agora usam 13 imagens locais pesquisadas no Pexels. O mapeamento est? em `src/data/newsImages.ts` e as fontes est?o em [IMAGENS.md](IMAGENS.md). Os espa?os e as propor??es do layout foram mantidos.
