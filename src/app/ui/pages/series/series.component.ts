import { Component, computed, inject, WritableSignal } from '@angular/core';
import { Series } from '../../../domain/models/series/series';
import { ContainerInformationSeriesComponent } from "./container-information-series/container-information-series.component";
import { ContainerScrollSeriesComponent } from "./container-scroll-series/container-scroll-series.component";
import { StateSeriesService } from '../../../domain/states/series/state-series.service';
import { listAllGenders } from '../../../domain/models/series/gender';
import { StateSerieListGendersService } from '../../../domain/states/series/state-serie-list-genders.service';

@Component({
  selector: 'app-series',
  imports: [ContainerInformationSeriesComponent, ContainerScrollSeriesComponent],
  templateUrl: './series.component.html',
  styleUrl: './series.component.css'
})
export class SeriesComponent {

  public listAllGendersData: string[] = listAllGenders;
  private stateSeriesService: StateSeriesService = inject(StateSeriesService);
  private stateSerieListGendersService: StateSerieListGendersService = inject(StateSerieListGendersService);
  protected selectedSerie: WritableSignal<Series> = this.stateSeriesService.selectedSerie;
  protected gendersWithSeries = computed(() => {
    const list: Series[] = this.stateSerieListGendersService.listDataSerie();

    if (list.length === 0) {
      return [];
    }

    return this.listAllGendersData.filter((gender) => {
      return list.some((serie) => serie.gender.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim() === gender.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim());
    });
  })
}
