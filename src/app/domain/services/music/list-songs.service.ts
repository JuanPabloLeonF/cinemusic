import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListSongs } from '../../models/music/play-list';

@Injectable({
  providedIn: 'root'
})
export class ListSongsService {

  private urlApi: string = 'data/music_list-songs.json';
  private httpClient: HttpClient = inject(HttpClient);

  public getAll(): Observable<ListSongs[]> {
    return this.httpClient.get<ListSongs[]>(this.urlApi);;
  }

  public createNewListSongs(listSongs: any): Observable<ListSongs> {
    return this.httpClient.post<ListSongs>(this.urlApi, listSongs);
  }

  public deleteSongOfList(idSong: string, idList: string): void {
    this.httpClient.delete(this.urlApi + '/' + idSong + '/' + idList);
  }
}
