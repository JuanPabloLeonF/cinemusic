import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PlayList } from '../../models/music/play-list';

@Injectable({
  providedIn: 'root'
})
export class PlayListService {

  private urlApi: string = 'data/music_data_songs.json';
  private httpClient: HttpClient = inject(HttpClient);

  public getDataPlayList(): Observable<PlayList> {
    return this.httpClient.get<PlayList>("data/music_data_play_list.json");;
  }
}
