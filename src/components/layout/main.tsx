import { NewsImage } from '../newsImage'
import { useRef, useState } from 'react'
import { featuredNews, type News } from '../../data/news'

export function Main({ news }: { news: News[] }) {
  const [favorites, setFavorites] = useState<number[]>([])
  const [selectedNews, setSelectedNews] = useState<News>(featuredNews)
  const dialog = useRef<HTMLDialogElement>(null)

  function openNews(item: News) {
    setSelectedNews(item)
    dialog.current?.showModal()
  }

  function toggleFavorite(id: number) {
    setFavorites((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id])
  }

  return (
    <main>
      <section className="featured" aria-labelledby="featured-title">
        <NewsImage className="featured-image" news={featuredNews} priority />
        <div className="featured-content">
          <p>15 de out. de 2026 · 12,4k visualizações</p>
          <h1 id="featured-title">{featuredNews.title}</h1>
          <button type="button" onClick={() => openNews(featuredNews)}>Ler mais →</button>
        </div>
      </section>
      <section className="latest" aria-labelledby="latest-title">
        <header className="section-header"><h2 id="latest-title">Últimas Notícias</h2><span className="grid-badge">Grade</span></header>
        <div className="news-grid" aria-live="polite">
          {news.map((item) => (
            <article className="news-card" key={item.id} id={`noticia-${item.id}`}>
              <NewsImage className="news-image" news={item} />
              <div className="news-content">
                <span className="category-label">{item.label}</span>
                <h3><button type="button" onClick={() => openNews(item)}>{item.title}</button></h3>
                <p>Resumo curto da notícia para pré-visualização no card.</p>
                <div className="news-meta">
                  <time dateTime={`2026-10-${String(item.day).padStart(2, '0')}`}>{String(item.day).padStart(2, '0')} out</time>
                  <span>👁️ {item.views.toFixed(1)}k</span>
                  <button className="favorite" type="button" aria-label={`${favorites.includes(item.id) ? 'Remover dos' : 'Adicionar aos'} favoritos: ${item.title}`} aria-pressed={favorites.includes(item.id)} onClick={() => toggleFavorite(item.id)}>{favorites.includes(item.id) ? '♥' : '♡'}</button>
                </div>
              </div>
            </article>
          ))}
          {news.length === 0 && <p className="empty-state">Nenhuma notícia encontrada. Tente outra busca ou categoria.</p>}
        </div>
      </section>
      <dialog ref={dialog} className="article-dialog" aria-labelledby="article-title">
        <form method="dialog"><button aria-label="Fechar notícia" className="close-dialog">×</button></form>
        <NewsImage className="dialog-image" news={selectedNews} />
        <a className="image-credit" href={selectedNews.image.source} target="_blank" rel="noreferrer">Imagem ilustrativa ? Foto e cr?ditos no Pexels</a>
        <span className="category-label">{selectedNews.label}</span>
        <h2 id="article-title">{selectedNews.title}</h2>
        <p>{selectedNews.day} de outubro de 2026 · {selectedNews.views.toFixed(1)}k visualizações</p>
        <p>Resumo curto da notícia para pré-visualização no card.</p>
        <p className="article-note">Esta notícia faz parte da demonstração do layout. O conteúdo completo ainda não foi cadastrado.</p>
      </dialog>
    </main>
  )
}
