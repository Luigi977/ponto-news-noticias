import type { NewsImageData } from "./news-image";

export type News = {
    id: number;
    title: string;
    description: string;
    category: string;
    label: string;
    day: number;
    views: number;
    image: NewsImageData;
    gradient: string;
};
