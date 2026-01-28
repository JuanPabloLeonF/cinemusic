export interface Series {
    id: string
    name: string;
    image: string;
    description: string;
    year: number;
    gender: string;
    rating: number;
    seasons?: Season[];
}

export interface Season {
    seasonNumber: number;
    chapters: Chapter[];
    id: string
    name: string;
    image: string;
    description: string;
}

export interface Chapter {
    chapterNumber: number;
    video: string;
    id: string
    name: string;
    image: string;
    description: string;
    idSeason: string;
}