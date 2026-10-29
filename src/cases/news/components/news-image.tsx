import type { News } from '../dtos/news'

type NewsImageProps = { news: News; className: string; priority?: boolean }

export function NewsImage({ news, className, priority = false }: NewsImageProps) {
  return (
    <div className={`news-photo ${className}`} style={{ background: news.gradient }}>
      <img src={news.image.src} alt={news.image.alt}
        loading={priority ? 'eager' : 'lazy'} decoding="async"
        fetchPriority={priority ? 'high' : 'auto'}
        style={{ objectPosition: news.image.position }}
        onError={(event) => { event.currentTarget.style.display = 'none' }} />
    </div>
  )
}
