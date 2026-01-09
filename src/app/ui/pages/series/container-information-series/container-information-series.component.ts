import { Component, inject, WritableSignal } from '@angular/core';
import { SvgPlayComponent } from "../../../components/svg-play/svg-play.component";
import { InputIconSearchComponent } from "../../../components/input-icon-search/input-icon-search.component";
import { Series } from '../../../../domain/models/series/series';
import { StateSeriesService } from '../../../../domain/states/series/state-series.service';
import { StateSerieListSearchService } from '../../../../domain/states/series/state-serie-list-search.service';

@Component({
  selector: 'app-container-information-series',
  imports: [SvgPlayComponent, InputIconSearchComponent],
  templateUrl: './container-information-series.component.html',
  styleUrl: './container-information-series.component.css'
})
export class ContainerInformationSeriesComponent {
  protected stateSeriesService: StateSeriesService = inject(StateSeriesService);
  protected stateSerieListSearchService: StateSerieListSearchService = inject(StateSerieListSearchService);
  protected selectedSerie: WritableSignal<Series> = this.stateSeriesService.selectedSerie;
  protected listSeriesSearchDataFiltered: WritableSignal<Series[]> = this.stateSerieListSearchService.listSeriesSearchDataFiltered; 
  
  protected onChangeInputData(data: string): void {
    this.stateSerieListSearchService.filteredDataByName(data);
  }
}
