import { inject, Injectable } from '@angular/core';
import { Song } from '../models/music/songs';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Gender } from '../models/music/gender';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

    private urlApi: string = 'data/music_data_songs.json';
    private httpClient: HttpClient = inject(HttpClient);

    public getAll(): Observable<Song[]> {
      return this.httpClient.get<Song[]>(this.urlApi);;
    }

    public getSongNew(): Observable<Song> {
      return this.httpClient.get<Song>("data/music_data_new.json")
    }

    public getSongMostListened(): Observable<Song> {
      return this.httpClient.get<Song>("data/music_data_new.json")
    }

    public getAllHistory(): Observable<Song[]> {
      return this.httpClient.get<Song[]>(this.urlApi);;
    }

    public getAllGender(): Observable<Gender[]> {
      return this.httpClient.get<Gender[]>("data/music_data_gender_all.json");;
    }

    public getGenderMostListened(): Observable<Gender> {
      return this.httpClient.get<Gender>("data/music_data_gender.json");;
    }
}   