import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Song } from '../../models/music/songs';

@Injectable({
  providedIn: 'root'
})
export class SongService {

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
}
