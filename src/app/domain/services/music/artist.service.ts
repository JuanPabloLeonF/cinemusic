import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Artis } from '../../models/music/artis';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  private urlApi: string = 'data/music_data_songs.json';
  private httpClient: HttpClient = inject(HttpClient);

   public getArtist(): Observable<Artis> {
    return this.httpClient.get<Artis>("data/music_data_artist.json");
  }
}
