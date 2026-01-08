import { Component, inject, WritableSignal } from '@angular/core';
import { Series } from '../../../domain/models/series/series';
import { ContainerInformationSeriesComponent } from "./container-information-series/container-information-series.component";
import { ContainerScrollSeriesComponent } from "./container-scroll-series/container-scroll-series.component";
import { StateSeriesService } from '../../../domain/states/series/state-series.service';
import { GenderEnum, listAllGenders } from '../../../domain/models/series/gender';

@Component({
  selector: 'app-series',
  imports: [ContainerInformationSeriesComponent, ContainerScrollSeriesComponent],
  templateUrl: './series.component.html',
  styleUrl: './series.component.css'
})
export class SeriesComponent {

  public listAllGendersData: string[] = listAllGenders;
  private stateSeriesService: StateSeriesService = inject(StateSeriesService);
  protected selectedSerie: WritableSignal<Series> = this.stateSeriesService.selectedSerie;
}
