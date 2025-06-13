export interface Song {
    id: string
    name: string;
    image: string;
    description: string;
    audio: string;
    artist: string;
    album: string;
    year: number;
    gender: string;
    rating: number;
    isFavorite: boolean;
    isPlaying: boolean;
}

export enum CardOptionsConst {
    SHARE = "share",
    FAVORITE = "favorite",
    PLAYLIST = "playlist",
    DELETE = "delete",
}