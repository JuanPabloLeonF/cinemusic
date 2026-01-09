import { effect, inject, Injectable, signal, WritableSignal } from '@angular/core';
import { Series } from '../../models/series/series';
import { StateSerieListSearchService } from './state-serie-list-search.service';
import { SeriesDataService } from '../../services/series/series-data.service';
import { StateSerieListGendersService } from './state-serie-list-genders.service';

@Injectable({
  providedIn: 'root'
})
export class StateSeriesService {

  private seriesDataService: SeriesDataService = inject(SeriesDataService);
  public stateSerieListSearchService: StateSerieListSearchService = inject(StateSerieListSearchService);
  public stateSerieListGendersService: StateSerieListGendersService = inject(StateSerieListGendersService);
  public selectedSerie: WritableSignal<Series> = signal<Series>({} as Series); 

  constructor () {
    effect(() => {
      this.stateSerieListSearchService.listSeriesSearchData.set(this.seriesDataService.getAllListSeries.signal());
    });

    effect(() => {
      this.stateSerieListGendersService.listDataSerie.set(this.seriesDataService.getAllListSeries.signal());
    });

    effect(() => {
      this.selectedSerie.set(this.stateSerieListSearchService.listSeriesSearchData()[0]);
    });
  }

  public changeSelectedSerie(id: String): void {
    const newSerie: Series = this.seriesDataService.getAllListSeries.signal().find((serie) => serie.id === id) || {} as Series;
    this.selectedSerie.set(newSerie);
  }
}
