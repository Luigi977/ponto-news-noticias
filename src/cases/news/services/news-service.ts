import { news } from "../dtos/news";
import type { NewsFilter } from "../dtos/news-filter";

function normalize(value: string) {
    return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

export const newsService = {
    listAll() {
        return [...news];
    },

    list(filters: NewsFilter = {}) {
        const category = filters.category ?? "todos";
        const search = normalize(filters.search ?? "");
        const sort = filters.sort ?? "recentes";

        const result = this.listAll().filter((item) => (
            (category === "todos" || item.category === category) &&
            normalize(item.title).includes(search)
        ));

        return result.sort((first, second) => {
            if (sort === "lidas") {
                return second.views - first.views;
            }

            if (sort === "antigas") {
                return first.day - second.day;
            }

            return second.day - first.day;
        });
    },

    listMostRead() {
        return this.list({ sort: "lidas" }).slice(0, 5);
    }
};
