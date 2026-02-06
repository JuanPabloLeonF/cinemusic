import { ChangeDetectionStrategy, Component, inject, WritableSignal } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { InputIconSearchComponent } from "../../../components/input-icon-search/input-icon-search.component";
import { Series } from '../../../../domain/models/series/series';
import { SelectOptionsComponent } from "../../../components/select-options/select-options.component";
import { listAllGenders } from '../../../../domain/models/series/gender';
import { StateSectionGenderSeriesService } from '../../../../domain/states/series/state-section-gender-series.service';

@Component({
  selector: 'app-section-gender-series',
  imports: [RouterModule, InputIconSearchComponent, SelectOptionsComponent],
  templateUrl: './section-gender-series.component.html',
  styleUrl: './section-gender-series.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SectionGenderSeriesComponent {

  private route = inject(ActivatedRoute);
  protected listGender: string[] = listAllGenders;
  public stateSectionGenderSeriesService: StateSectionGenderSeriesService = inject(StateSectionGenderSeriesService);
  protected seriesListData: WritableSignal<Series[]> = this.stateSectionGenderSeriesService.listFilteredByGender;

  constructor() {
    this.listenGenderFromRoute();
  }

  private listenGenderFromRoute(): void {
    this.route.paramMap.subscribe(params => {
      const gender = params.get('gender') ?? '';
      this.stateSectionGenderSeriesService.changeGenderGloabal(gender);
    });
  }
}
  