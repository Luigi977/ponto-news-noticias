export type NewsSort = "recentes" | "antigas" | "lidas";

export type NewsFilter = {
    category?: string;
    search?: string;
    sort?: NewsSort;
};
