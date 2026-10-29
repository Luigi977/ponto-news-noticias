import { newsImages, type NewsImageData } from "./news-image";

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

export const featuredNews: News = {
    id: 0,
    title: "Nova tecnologia promete revolucionar a forma como vivemos nas cidades",
    category: "tecnologia",
    label: "Tecnologia",
    day: 15,
    views: 12.4,
    gradient: "linear-gradient(155deg, #ff8b43, #583a75 58%, #172d4d)",
    description: "Resumo curto da notícia para pré-visualização no card.",
    image: newsImages[0]
};

export const news: News[] = [
    featuredNews,
    {
        id: 1,
        title: "WhatsApp lança nova função para melhorar a privacidade",
        category: "tecnologia",
        label: "Tecnologia",
        day: 14,
        views: 8.2,
        gradient: "linear-gradient(120deg, #1d3c30, #4eae7a)",
        description: "Resumo curto da notícia para pré-visualização no card.",
        image: newsImages[1]
    },
    {
        id: 2,
        title: "Flamengo vence e assume a liderança do Brasileirão",
        category: "esportes",
        label: "Esportes",
        day: 14,
        views: 6.7,
        gradient: "linear-gradient(120deg, #b61f2b, #2b683b)",
        description: "Resumo curto da notícia para pré-visualização no card.",
        image: newsImages[2]
    },
    {
        id: 3,
        title: "Inflação desacelera e fica abaixo do esperado em setembro",
        category: "economia",
        label: "Economia",
        day: 13,
        views: 5.1,
        gradient: "linear-gradient(120deg, #242232, #c2a047)",
        description: "Resumo curto da notícia para pré-visualização no card.",
        image: newsImages[3]
    },
    {
        id: 4,
        title: "Congresso discute novo pacote de reformas na próxima semana",
        category: "politica",
        label: "Política",
        day: 12,
        views: 4.3,
        gradient: "linear-gradient(120deg, #6c7c8e, #d6dce3)",
        description: "Resumo curto da notícia para pré-visualização no card.",
        image: newsImages[4]
    },
    {
        id: 5,
        title: "Inteligência artificial avança e já impacta o mercado de trabalho",
        category: "tecnologia",
        label: "Tecnologia",
        day: 12,
        views: 3.6,
        gradient: "linear-gradient(120deg, #0e3b68, #7ec6e8)",
        description: "Resumo curto da notícia para pré-visualização no card.",
        image: newsImages[5]
    },
    {
        id: 6,
        title: "Novo filme da franquia é confirmado para 2027",
        category: "entretenimento",
        label: "Entretenimento",
        day: 12,
        views: 3.9,
        gradient: "linear-gradient(120deg, #252524, #be7a37)",
        description: "Resumo curto da notícia para pré-visualização no card.",
        image: newsImages[6]
    },
    {
        id: 7,
        title: "Energia limpa avança no Brasil e bate recorde em 2026",
        category: "ciencia",
        label: "Ciência",
        day: 11,
        views: 2.8,
        gradient: "linear-gradient(120deg, #278b55, #9bd1e5)",
        description: "Resumo curto da notícia para pré-visualização no card.",
        image: newsImages[7]
    },
    {
        id: 8,
        title: "Missão brasileira é selecionada para projeto espacial",
        category: "mundo",
        label: "Mundo",
        day: 10,
        views: 2.1,
        gradient: "linear-gradient(120deg, #7c2b1c, #e8a17e)",
        description: "Resumo curto da notícia para pré-visualização no card.",
        image: newsImages[8]
    },
    {
        id: 9,
        title: "Novo tratamento mostra eficácia contra o câncer",
        category: "saude",
        label: "Saúde",
        day: 10,
        views: 1.9,
        gradient: "linear-gradient(120deg, #dce7eb, #4e7eac)",
        description: "Resumo curto da notícia para pré-visualização no card.",
        image: newsImages[9]
    },
    {
        id: 10,
        title: "Rio sedia campeonato mundial de eSports em 2026",
        category: "esportes",
        label: "Esportes",
        day: 9,
        views: 1.6,
        gradient: "linear-gradient(120deg, #1c1b3b, #6628c5)",
        description: "Resumo curto da notícia para pré-visualização no card.",
        image: newsImages[10]
    },
    {
        id: 11,
        title: "Exportações brasileiras batem recorde no terceiro trimestre",
        category: "economia",
        label: "Economia",
        day: 8,
        views: 1.4,
        gradient: "linear-gradient(120deg, #193a65, #c64f39)",
        description: "Resumo curto da notícia para pré-visualização no card.",
        image: newsImages[11]
    },
    {
        id: 12,
        title: "Governo anuncia novo pacote de medidas sociais",
        category: "politica",
        label: "Política",
        day: 8,
        views: 1.2,
        gradient: "linear-gradient(120deg, #8e272c, #e1c2a3)",
        description: "Resumo curto da notícia para pré-visualização no card.",
        image: newsImages[12]
    }
];
