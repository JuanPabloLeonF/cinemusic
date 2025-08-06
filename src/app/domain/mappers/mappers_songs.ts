import { Song } from '../models/music/songs';

export class SongMapper {

  public static fromJsonToSong(json: any): Song {
    return {
      id: json.id,
      name: json.name,
      image: json.image,
      description: json.description,
      audio: json.audio,
      artist: json.artist,
      album: json.album,
      year: json.year,
      gender: json.gender,
      rating: json.rating,
      isFavorite: json.isFavorite,
      isPlaying: json.isPlaying,
    };
  }

  public static fromJsonArrayToSongs(body: unknown): Song[] {
    if (Array.isArray(body)) {
      return body.map(jsonItem => this.fromJsonToSong(jsonItem));
    }
    return [];
  }
}