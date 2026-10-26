import { useEffect, useState } from 'react'
import { mostReadNews, type News } from '../../data/news'
import { NewsImage } from '../newsImage'

type NewsCarouselProps = {
  onOpenNews: (news: News) => void
}

export function NewsCarousel({ onOpenNews }: NewsCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const [hovered, setHovered] = useState(false)
  const [focused, setFocused] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(() =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  )
  const activeNews = mostReadNews[activeIndex]
  const rotating = !paused && !hovered && !focused && !reducedMotion

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    function updatePreference() {
      setReducedMotion(preference.matches)
    }
    preference.addEventListener('change', updatePreference)
    return () => preference.removeEventListener('change', updatePreference)
  }, [])

  useEffect(() => {
    if (!rotating) return

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % mostReadNews.length)
    }, 5000)

    return () => window.clearInterval(timer)
  }, [rotating, activeIndex])

  function changeNews(direction: number) {
    setActiveIndex((current) =>
      (current + direction + mostReadNews.length) % mostReadNews.length,
    )
  }

  return (
    <section className="featured" aria-label="Notícias mais lidas" aria-roledescription="carrossel"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setFocused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false)
      }}>
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
            <button type="button" aria-pressed={paused} onClick={() => setPaused((current) => !current)} disabled={reducedMotion}>
              {reducedMotion ? 'Manual' : paused ? 'Retomar' : 'Pausar'}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
