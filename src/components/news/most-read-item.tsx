import type { News } from '../../cases/news/dtos/news'
import { NewsImage } from './news-image'

type MostReadItemProps = {
  news: News
  rank: number
}

export function MostReadItem({ news, rank }: MostReadItemProps) {
  return (
    <li>
      <span className="rank">{rank}</span>
      <NewsImage className="ranking-image" news={news} />
      <div>
        <p>{news.title}</p>
        <span className="ranking-views">👁️ {news.views.toFixed(1)}k</span>
      </div>
    </li>
  )
}
