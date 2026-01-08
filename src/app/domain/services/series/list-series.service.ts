import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Series } from '../../models/series/series';

@Injectable({
  providedIn: 'root'
})
export class ListSeriesService {

  private urlApi: string = 'data/series_data_list.json';
  private httpClient: HttpClient = inject(HttpClient);

  public getAll(): Observable<Series[]> {
    return this.httpClient.get<Series[]>(this.urlApi);
  }
}
