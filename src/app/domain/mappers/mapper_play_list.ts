import { PlayList } from "../models/music/play-list";

export class MapperPlayList {

    public static fromJsonToPlayList(json: any): PlayList {
        return {
          id: json.id,
          quantityFavorite: json.quantityFavorite,
          quantityPlayList: json.quantityPlayList,
          quantitySongsTotals: json.quantitySongsTotals
        };
      }
    
      public static fromJsonArrayToPlaylists(body: unknown): PlayList[] {
        if (Array.isArray(body)) {
          return body.map(jsonItem => this.fromJsonToPlayList(jsonItem));
        }
        return [];
      }
}