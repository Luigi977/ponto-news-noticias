import { NewsImage } from '../newsImage'
import { mostReadNews } from '../../data/news'

export function MostRead() {
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
