import { useEffect, useState } from 'react'
import type { News } from '../dtos/news'
import { NewsImage } from './news-image'

type NewsCarouselProps = {
  news: News[]
  onOpenNews: (news: News) => void
}

export function NewsCarousel({ news: mostReadNews, onOpenNews }: NewsCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const activeNews = mostReadNews[activeIndex]
  const rotating = !paused

  useEffect(() => {
    if (!rotating || mostReadNews.length < 2) return

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % mostReadNews.length)
    }, 5000)

    return () => window.clearInterval(timer)
  }, [rotating, mostReadNews.length])

  function changeNews(direction: number) {
    setActiveIndex((current) =>
      (current + direction + mostReadNews.length) % mostReadNews.length,
    )
  }

  if (!activeNews) return null

  return (
    <section className="featured" aria-label="Notícias mais lidas" aria-roledescription="carrossel">
      <NewsImage key={activeNews.id} className="featured-image" news={activeNews} priority />
      <div className="featured-content">
        <div className="featured-slide" aria-live={rotating ? 'off' : 'polite'} aria-atomic="true">
          <p>{activeNews.day} de out. de 2026 · {activeNews.views.toFixed(1).replace('.', ',')}k visualizações</p>
          <h1>{activeNews.title}</h1>
        </div>
        <div className="carousel-actions">
          <button type="button" onClick={() => onOpenNews(activeNews)}>Ler mais →</button>
          <div className="carousel-controls" role="group" aria-label="Controles do carrossel">
            <button type="button" aria-label="Notícia anterior" onClick={() => changeNews(-1)}>‹</button>
            <span className="carousel-position" aria-label={`Notícia ${activeIndex + 1} de ${mostReadNews.length}`}>
              {activeIndex + 1}/{mostReadNews.length}
            </span>
            <button type="button" aria-label="Próxima notícia" onClick={() => changeNews(1)}>›</button>
            <button type="button" aria-pressed={paused} onClick={() => setPaused((current) => !current)}>
              {paused ? 'Retomar' : 'Pausar'}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
