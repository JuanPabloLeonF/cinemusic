import { Injectable, signal, WritableSignal } from '@angular/core';
import { Series } from '../../models/series/series';

@Injectable({
  providedIn: 'root'
})
export class StateSerieListGendersService {

  public listDataSerie: WritableSignal<Series[]> = signal<Series[]>([]);
  public listDataSerieFiltered: WritableSignal<Series[]> = signal<Series[]>([]);
  

  public listSeriesFilteredByGender(gender: string): void {
    this.listDataSerieFiltered.set(this.listDataSerie().filter(serie => serie.gender.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '') === gender.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')));
  }
  
}
