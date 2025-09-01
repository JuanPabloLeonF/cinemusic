import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Gender } from '../../models/music/gender';

@Injectable({
  providedIn: 'root'
})
export class GenderService {

  private urlApi: string = 'data/music_data_songs.json';
  private httpClient: HttpClient = inject(HttpClient);

  public getAllGender(): Observable<Gender[]> {
    return this.httpClient.get<Gender[]>("data/music_data_gender_all.json");;
  }

  public getGenderMostListened(): Observable<Gender> {
    return this.httpClient.get<Gender>("data/music_data_gender.json");;
  }
}
