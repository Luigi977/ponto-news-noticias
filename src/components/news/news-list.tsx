import type { News } from '../../cases/news/dtos/news'
import type { NewsView } from '../../cases/news/dtos/news-view'
import { NewsCard } from './news-card'
import { NewsViewSwitcher } from './news-view-switcher'

type NewsListProps = {
  news: News[]
  favorites: number[]
  view: NewsView
  onViewChange: (view: NewsView) => void
  onOpenNews: (news: News) => void
  onToggleFavorite: (id: number) => void
}

export function NewsList({ news, favorites, view, onViewChange, onOpenNews, onToggleFavorite }: NewsListProps) {
  return (
    <section className="latest" aria-labelledby="latest-title">
      <header className="section-header">
        <h2 id="latest-title">Últimas Notícias</h2>
        <NewsViewSwitcher view={view} onViewChange={onViewChange} />
      </header>
      <div className={`news-grid${view === 'list' ? ' news-list' : ''}`} aria-live="polite">
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
