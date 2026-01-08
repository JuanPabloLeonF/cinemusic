import { Injectable, signal, WritableSignal } from '@angular/core';
import { Series } from '../../models/series/series';

@Injectable({
  providedIn: 'root'
})
export class StateSerieListSearchService {

  public listSeriesSearchData: WritableSignal<Series[]> = signal<Series[]>([]); 
  public listSeriesSearchDataFiltered: WritableSignal<Series[]> = signal<Series[]>([]); 

  public filteredDataByName(name: string): void {
    if (!name) {
      this.listSeriesSearchDataFiltered.set([]);
      return;
    } else {
      this.listSeriesSearchDataFiltered.set(
        this.listSeriesSearchData().
        filter(serie => serie.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').includes(name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')))
      );
    }
  }

}
