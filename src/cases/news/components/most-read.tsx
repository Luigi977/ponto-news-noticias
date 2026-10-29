import { NewsImage } from './news-image'
import type { News } from '../dtos/news'

type MostReadProps = {
  news: News[]
}

export function MostRead({ news: mostReadNews }: MostReadProps) {
  return (
    <aside className="most-read panel" aria-labelledby="most-read-title">
      <h2 id="most-read-title">🔥 Mais lidas</h2>
      <ol>
        {mostReadNews.map((item, index) => (
          <li key={item.id}>
            <span className="rank">{index + 1}</span>
            <NewsImage className="ranking-image" news={item} />
            <div><p>{item.title}</p><span className="ranking-views">👁️ {item.views.toFixed(1)}k</span></div>
          </li>
        ))}
      </ol>
    </aside>
  )
}
