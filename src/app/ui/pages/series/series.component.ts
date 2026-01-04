import { Component } from '@angular/core';
import { Series } from '../../../domain/models/series/series';
import { ContainerInformationSeriesComponent } from "./container-information-series/container-information-series.component";
import { ContainerScrollSeriesComponent } from "./container-scroll-series/container-scroll-series.component";

@Component({
  selector: 'app-series',
  imports: [ContainerInformationSeriesComponent, ContainerScrollSeriesComponent],
  templateUrl: './series.component.html',
  styleUrl: './series.component.css'
})
export class SeriesComponent {

  protected seriesData: Series = {
    id: '1',
    name: 'Spider-Man: lejos de casa',
    image: 'images/series/Spider-Manlejosdecasa.webp',
    description: 'Peter Parker decide pasar unas merecidas vacaciones en Europa junto a MJ, Ned y el resto de sus amigos. Sin embargo, Peter debe volver a ponerse el traje de Spider-Man cuando Nick Fury le encomienda una nueva misión: frenar el ataque de unas criaturas que están causando el caos en el continente.',
    year: 2019,
    gender: 'ficcion',
    rating: 7.5
  }
}
