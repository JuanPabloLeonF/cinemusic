import { Component, inject} from '@angular/core';
import { RouterModule } from '@angular/router';
import { SelectOptionsComponent } from "../../../components/select-options/select-options.component";
import { ActivatedRoute } from '@angular/router';
import { SeriesVideo } from '../../../../domain/models/series/series';
import { SectionViewSeriesComponent } from "./section-view-series/section-view-series.component";
import { SectionScrollChaptersSeriesComponent } from "./section-scroll-chapters-series/section-scroll-chapters-series.component";
import { SvgBackComponent } from "../../../components/svg-back/svg-back.component";

@Component({
  selector: 'app-serie-selected-view',
  imports: [RouterModule, SelectOptionsComponent, SectionViewSeriesComponent, SectionScrollChaptersSeriesComponent, SvgBackComponent],
  templateUrl: './serie-selected-view.component.html',
  styleUrl: './serie-selected-view.component.css'
})
export class SerieSelectedViewComponent {

  private route = inject(ActivatedRoute);

  protected listOptions = ["1", "2", "3","1", "2", "3","1", "2", "3","1", "2", "3","1", "2", "3"];
  protected serieSelected: SeriesVideo = {
    "id": "1",
    "name": "Horizonte Final",
    "image": "images/series/Spider-Manlejosdecasa.webp",
    "description": "Un grupo de científicos descubre una señal proveniente de los límites del universo que podría cambiar el destino de la humanidad.",
    "year": 2021,
    "gender": "accion",
    "rating": 8.4,
    "video": "images/series/spiderman-triler.mp4"
  }

  constructor() {
    this.listenGenderFromRoute();
  }

  private listenGenderFromRoute(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id') ?? '';
      console.log(id);
    });
  }
}
