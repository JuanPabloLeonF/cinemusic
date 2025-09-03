import { Song } from "./songs"

export interface PlayList {
    id: string
    quantityFavorite: number
    quantitySongsTotals: number
    quantityPlayList: number
} 

export interface ListSongs {
    id: string
    name: string
    description: string
    image: string
    listSongs: Song[]
    durationList: string
}