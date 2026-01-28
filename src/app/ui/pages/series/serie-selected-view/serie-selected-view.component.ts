import { Component, inject, WritableSignal} from '@angular/core';
import { RouterModule } from '@angular/router';
import { SelectOptionsComponent } from "../../../components/select-options/select-options.component";
import { ActivatedRoute } from '@angular/router';
import { SectionViewSeriesComponent } from "./section-view-series/section-view-series.component";
import { SectionScrollChaptersSeriesComponent } from "./section-scroll-chapters-series/section-scroll-chapters-series.component";
import { SvgBackComponent } from "../../../components/svg-back/svg-back.component";
import { Season } from '../../../../domain/models/series/series';
import { StateSerieSelectedViewService } from '../../../../domain/states/series/state-serie-selected-view.service';

@Component({
  selector: 'app-serie-selected-view',
  imports: [RouterModule, SelectOptionsComponent, SectionViewSeriesComponent, SectionScrollChaptersSeriesComponent, SvgBackComponent],
  templateUrl: './serie-selected-view.component.html',
  styleUrl: './serie-selected-view.component.css'
})
export class SerieSelectedViewComponent {

  private route = inject(ActivatedRoute);
  protected stateSerieSelectedViewService: StateSerieSelectedViewService = inject(StateSerieSelectedViewService);
  protected listOptions: WritableSignal<string[]> = this.stateSerieSelectedViewService.listOptions;
  protected seasonSelected: WritableSignal<Season> = this.stateSerieSelectedViewService.seasonSelected;

  constructor() {
    this.listenGenderFromRoute();
  }

  private listenGenderFromRoute(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id') ?? '';
      this.stateSerieSelectedViewService.getSerieById(id);
    });
  }

  protected changeSeasonBySelectedSeasonOption(seasonSelecetedOption: string): void {
    this.stateSerieSelectedViewService.changeSeasonBySelectedSeasonOption(seasonSelecetedOption);
  }
}
