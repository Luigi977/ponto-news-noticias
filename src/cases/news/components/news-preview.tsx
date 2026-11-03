import type { RefObject } from "react";
import type { News } from "../dtos/news";
import { NewsImage } from "./news-image";

type NewsPreviewProps = {
    news: News;
    dialogRef: RefObject<HTMLDialogElement | null>;
};

export function NewsPreview({ news, dialogRef }: NewsPreviewProps) {
    return (
        <dialog ref={dialogRef} className="article-dialog" aria-labelledby="article-title">
            <form method="dialog">
                <button aria-label="Fechar notícia" className="close-dialog">×</button>
            </form>
            <NewsImage key={news.id} className="dialog-image" news={news} />
            <a className="image-credit" href={news.image.source} target="_blank" rel="noreferrer">
                Imagem ilustrativa · Foto e créditos no Pexels
            </a>
            <span className="category-label">{news.label}</span>
            <h2 id="article-title">{news.title}</h2>
            <p>{news.day} de outubro de 2026 · {news.views.toFixed(1)}k visualizações</p>
            <p>{news.description}</p>
            <p className="article-note">
                Esta notícia faz parte da demonstração do layout. O conteúdo completo ainda não foi cadastrado.
            </p>
        </dialog>
    );
}
