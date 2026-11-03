import type { News } from "../dtos/news";
import { NewsImage } from "./news-image";

type NewsCardProps = {
    news: News;
    isFavorite: boolean;
    onOpenNews: (news: News) => void;
    onToggleFavorite: (id: number) => void;
};

export function NewsCard({ news, isFavorite, onOpenNews, onToggleFavorite }: NewsCardProps) {
    return (
        <article className="news-card" id={`noticia-${news.id}`}>
            <NewsImage className="news-image" news={news} />
            <div className="news-content">
                <span className="category-label">{news.label}</span>
                <h3>
                    <button type="button" onClick={() => onOpenNews(news)}>
                        {news.title}
                    </button>
                </h3>
                <p>{news.description}</p>
                <div className="news-meta">
                    <time dateTime={`2026-10-${String(news.day).padStart(2, "0")}`}>
                        {String(news.day).padStart(2, "0")} out
                    </time>
                    <span>👁️ {news.views.toFixed(1)}k</span>
                    <button
                        className="favorite"
                        type="button"
                        aria-label={`${isFavorite ? "Remover dos" : "Adicionar aos"} favoritos: ${news.title}`}
                        aria-pressed={isFavorite}
                        onClick={() => onToggleFavorite(news.id)}
                    >
                        {isFavorite ? "♥" : "♡"}
                    </button>
                </div>
            </div>
        </article>
    );
}
