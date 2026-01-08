import { ListSongs } from "../../models/music/play-list";

export class MapperListSongs {

    public static fromJsonToListSongs(json: any): ListSongs {
        return {
          id: json.id,
          name: json.name,
          description: json.description,
          listSongs: json.list,
          image: json.image,
          durationList: json.duration
        };
      }
    
      public static fromJsonArrayToListSongs(body: unknown): ListSongs[] {
        if (Array.isArray(body)) {
          return body.map(jsonItem => this.fromJsonToListSongs(jsonItem));
        }
        return [];
      }
}