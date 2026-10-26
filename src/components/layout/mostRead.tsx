import { NewsImage } from '../newsImage'
import { news } from '../../data/news'

// Ordem editorial apresentada nas telas de referência.
const mostRead = [news[1], news[0], news[2], news[4], news[5]]

export function MostRead() {
  return (
    <aside className="most-read panel" aria-labelledby="most-read-title">
      <h2 id="most-read-title">🔥 Mais lidas</h2>
      <ol>
        {mostRead.map((item, index) => (
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
