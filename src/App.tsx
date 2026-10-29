import { useRef, useState } from "react";
import { Header } from "./components/layout/header";
import { NavigationBar } from "./components/layout/navigationBar";
import { categories } from "./data/categories";
import { NewsCard } from "./cases/news/components/news-card";
import { NewsCarousel } from "./cases/news/components/news-carousel";
import { NewsPreview } from "./cases/news/components/news-preview";
import { MostRead } from "./cases/news/components/most-read";
import { featuredNews, type News } from "./cases/news/dtos/news";
import type { NewsSort } from "./cases/news/dtos/news-filter";
import { useNews, useMostReadNews } from "./cases/news/hooks/use-news";

function App() {
    const [activeCategory, setActiveCategory] = useState<string>("todos");
    const [search, setSearch] = useState<string>("");
    const [sort, setSort] = useState<NewsSort>("recentes");
    const [favorites, setFavorites] = useState<number[]>([]);
    const [selectedNews, setSelectedNews] = useState<News>(featuredNews);
    const dialog = useRef<HTMLDialogElement>(null);

    const news = useNews({ category: activeCategory, search, sort });
    const mostReadNews = useMostReadNews();

    function handleSelectCategory(alias: string) {
        setActiveCategory(alias);
    }

    function handleSearch(value: string) {
        setSearch(value);
    }

    function handleSort(value: NewsSort) {
        setSort(value);
    }

    function handleOpenNews(news: News) {
        setSelectedNews(news);
        dialog.current?.showModal();
    }

    function handleToggleFavorite(id: number) {
        setFavorites((current) => {
            if (current.includes(id)) {
                return current.filter((item) => item !== id);
            }

            return [...current, id];
        });
    }

    return (
        <div className="container">
            <Header search={search} onSearch={handleSearch} />
            <div className="page-layout">
                <NavigationBar
                    categories={categories}
                    activeCategory={activeCategory}
                    onSelectCategory={handleSelectCategory}
                    sort={sort}
                    onSort={handleSort}
                />
                <main>
                    <NewsCarousel news={mostReadNews} onOpenNews={handleOpenNews} />
                    <section className="latest" aria-labelledby="latest-title">
                        <header className="section-header">
                            <h2 id="latest-title">Últimas Notícias</h2>
                            <span className="grid-badge">Grade</span>
                        </header>
                        <div className="news-grid" aria-live="polite">
                            {news.map((item) => (
                                <NewsCard
                                    key={item.id}
                                    news={item}
                                    isFavorite={favorites.includes(item.id)}
                                    onOpenNews={handleOpenNews}
                                    onToggleFavorite={handleToggleFavorite}
                                />
                            ))}
                            {news.length === 0 && (
                                <p className="empty-state">
                                    Nenhuma notícia encontrada. Tente outra busca ou categoria.
                                </p>
                            )}
                        </div>
                    </section>
                    <NewsPreview news={selectedNews} dialogRef={dialog} />
                </main>
                <MostRead news={mostReadNews} />
            </div>
        </div>
    );
}

export default App;
