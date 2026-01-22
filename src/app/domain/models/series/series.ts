export interface Series {
    id: string
    name: string;
    image: string;
    description: string;
    year: number;
    gender: string;
    rating: number;
}

export interface SeriesVideo extends Series {
    video: string;
}