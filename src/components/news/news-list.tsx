import type { News } from '../../cases/news/dtos/news'
import { NewsCard } from './news-card'

type NewsListProps = {
  news: News[]
  favorites: number[]
  onOpenNews: (news: News) => void
  onToggleFavorite: (id: number) => void
}

export function NewsList({ news, favorites, onOpenNews, onToggleFavorite }: NewsListProps) {
  return (
    <section className="latest" aria-labelledby="latest-title">
      <header className="section-header">
        <h2 id="latest-title">Últimas Notícias</h2>
      </header>
      <div className="news-grid" aria-live="polite">
        {news.map((item) => (
          <NewsCard
            key={item.id}
            news={item}
            isFavorite={favorites.includes(item.id)}
            onOpenNews={onOpenNews}
            onToggleFavorite={onToggleFavorite}
          />
        ))}
        {news.length === 0 && (
          <p className="empty-state">
            Nenhuma notícia encontrada. Tente outra busca ou categoria.
          </p>
        )}
      </div>
    </section>
  )
}
