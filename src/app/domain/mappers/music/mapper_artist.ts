import { Artis } from "../../models/music/artis";

export class MapperArtist {
    public static fromJsonToArtist(json: any): Artis {
        return {
            id: json.id,
            name: json.name,
            image: json.image,
            gender: json.gender,
            song: json.song,
            numberPerson: json.numberPerson
        };
    }

    public static fromJsonArrayToArtis(body: unknown): Artis[] {
        if (Array.isArray(body)) {
        return body.map(jsonItem => this.fromJsonToArtist(jsonItem));
        }
        return [];
    }


}