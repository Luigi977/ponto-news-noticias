import { MostReadItem } from './most-read-item'
import type { News } from '../../cases/news/dtos/news'

type MostReadProps = {
  news: News[]
}

export function MostRead({ news: mostReadNews }: MostReadProps) {
  return (
    <aside className="most-read panel" aria-labelledby="most-read-title">
      <h2 id="most-read-title">🔥 Mais lidas</h2>
      <ol>
        {mostReadNews.map((item, index) => (
          <MostReadItem key={item.id} news={item} rank={index + 1} />
        ))}
      </ol>
    </aside>
  )
}
