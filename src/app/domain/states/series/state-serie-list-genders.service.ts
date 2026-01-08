import { Injectable, signal, WritableSignal } from '@angular/core';
import { Series } from '../../models/series/series';

@Injectable({
  providedIn: 'root'
})
export class StateSerieListGendersService {

  public listDataSerie: WritableSignal<Series[]> = signal<Series[]>([]);
  
}
