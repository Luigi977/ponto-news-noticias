import { useRef, useState } from "react";
import { Header } from "./components/layout/header";
import { NavigationBar } from "./components/layout/navigationBar";
import { categories } from "./data/categories";
import { NewsList } from "./components/news/news-list";
import { NewsCarousel } from "./components/news/news-carousel";
import { NewsPreview } from "./components/news/news-preview";
import { MostRead } from "./components/news/most-read";
import type { News } from "./cases/news/dtos/news";
import { featuredNews } from "./data/news";
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
                    <NewsList
                        news={news}
                        favorites={favorites}
                        onOpenNews={handleOpenNews}
                        onToggleFavorite={handleToggleFavorite}
                    />
                    <NewsPreview news={selectedNews} dialogRef={dialog} />
                </main>
                <MostRead news={mostReadNews} />
            </div>
        </div>
    );
}

export default App;
