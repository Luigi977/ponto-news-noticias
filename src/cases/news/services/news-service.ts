import { news } from "../../../data/news";
import type { News } from "../dtos/news";
import type { NewsFilter } from "../dtos/news-filter";

function normalize(value: string) {
    return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

export const newsService = {
    listAll(): News[] {
        return [...news];
    },

    list(filters: NewsFilter = {}): News[] {
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

    listMostRead(): News[] {
        return this.list({ sort: "lidas" }).slice(0, 5);
    }
};
