import type { NewsFilter } from "../dtos/news-filter";
import { newsService } from "../services/news-service";

export function useNews(filters: NewsFilter = {}) {
    return newsService.list(filters);
}

export function useMostReadNews() {
    return newsService.listMostRead();
}
