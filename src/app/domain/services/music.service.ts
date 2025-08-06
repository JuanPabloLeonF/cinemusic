import { inject, Injectable } from '@angular/core';
import { Song } from '../models/music/songs';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

    private urlApi: string = 'data/music_data.json';
    private httpClient: HttpClient = inject(HttpClient);

    public getAll(): Observable<Song[]> {
        return this.httpClient.get<Song[]>(this.urlApi);;
    }

}   