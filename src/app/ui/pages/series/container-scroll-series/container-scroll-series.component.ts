import { Component, ElementRef, ViewChild } from '@angular/core';
import { SvgPlayComponent } from "../../../components/svg-play/svg-play.component";
import { NgClass } from "@angular/common";
import { Series } from '../../../../domain/models/series/series';
import { SvgArrowBackComponent } from "../../../components/svg-arrow-back/svg-arrow-back.component";
import { SvgArrowNextComponent } from "../../../components/svg-arrow-next/svg-arrow-next.component";
import { SvgArrowSectionComponent } from "../../../components/svg-arrow-section/svg-arrow-section.component";

@Component({
  selector: 'app-container-scroll-series',
  imports: [SvgPlayComponent, NgClass, SvgArrowBackComponent, SvgArrowNextComponent, SvgArrowSectionComponent],
  templateUrl: './container-scroll-series.component.html',
  styleUrl: './container-scroll-series.component.css'
})
export class ContainerScrollSeriesComponent {
  
  @ViewChild('scrollContainer', { static: true })
  scrollContainer!: ElementRef<HTMLDivElement>;
  public seriesSelected: String = "1";


  public scrollNext() {
    this.scrollContainer.nativeElement.scrollBy({
      left: 480, 
      behavior: 'smooth'
    });
  }

  public scrollBack() {
    this.scrollContainer.nativeElement.scrollBy({
      left: -480,
      behavior: 'smooth'
    });
  }


  public listdataSeries: Series[] = [
    {
      id: '1',
      name: 'Spider-Man: lejos de casa',
      image: 'images/series/Spider-Manlejosdecasa.webp',
      description: 'Peter Parker decide pasar unas merecidas vacaciones en Europa junto a MJ, Ned y el resto de sus amigos. Sin embargo, Peter debe volver a ponerse el traje de Spider-Man cuando Nick Fury le encomienda una nueva misión: frenar el ataque de unas criaturas que están causando el caos en el continente.',
      year: 2019,
      gender: 'ficcion',
      rating: 7.5
    },
    {
      id: '2',
      name: 'Tarde me lo comi',
      image: 'images/series/Spider-Manlejosdecasa.webp',
      description: 'La verdad que esta es una descripcion de prueba ya que no se me ocurre nada para escribir, tenga en cuenta que tengo que gacer mis servicos de estado para las series.',
      year: 2019,
      gender: 'romance',
      rating: 8.5
    },
    {
      id: '3',
      name: 'Spider-Man: lejos de casa',
      image: 'images/series/Spider-Manlejosdecasa.webp',
      description: 'Peter Parker decide pasar unas merecidas vacaciones en Europa junto a MJ, Ned y el resto de sus amigos. Sin embargo, Peter debe volver a ponerse el traje de Spider-Man cuando Nick Fury le encomienda una nueva misión: frenar el ataque de unas criaturas que están causando el caos en el continente.',
      year: 2019,
      gender: 'ficcion',
      rating: 7.5
    },
    {
      id: '4',
      name: 'Tarde me lo comi',
      image: 'images/series/Spider-Manlejosdecasa.webp',
      description: 'La verdad que esta es una descripcion de prueba ya que no se me ocurre nada para escribir, tenga en cuenta que tengo que gacer mis servicos de estado para las series.',
      year: 2019,
      gender: 'romance',
      rating: 8.5
    },
    {
      id: '5',
      name: 'Spider-Man: lejos de casa',
      image: 'images/series/Spider-Manlejosdecasa.webp',
      description: 'Peter Parker decide pasar unas merecidas vacaciones en Europa junto a MJ, Ned y el resto de sus amigos. Sin embargo, Peter debe volver a ponerse el traje de Spider-Man cuando Nick Fury le encomienda una nueva misión: frenar el ataque de unas criaturas que están causando el caos en el continente.',
      year: 2019,
      gender: 'ficcion',
      rating: 7.5
    },
    {
      id: '6',
      name: 'Tarde me lo comi',
      image: 'images/series/Spider-Manlejosdecasa.webp',
      description: 'La verdad que esta es una descripcion de prueba ya que no se me ocurre nada para escribir, tenga en cuenta que tengo que gacer mis servicos de estado para las series.',
      year: 2019,
      gender: 'romance',
      rating: 8.5
    },
    {
      id: '7',
      name: 'Spider-Man: lejos de casa',
      image: 'images/series/Spider-Manlejosdecasa.webp',
      description: 'Peter Parker decide pasar unas merecidas vacaciones en Europa junto a MJ, Ned y el resto de sus amigos. Sin embargo, Peter debe volver a ponerse el traje de Spider-Man cuando Nick Fury le encomienda una nueva misión: frenar el ataque de unas criaturas que están causando el caos en el continente.',
      year: 2019,
      gender: 'ficcion',
      rating: 7.5
    },
    {
      id: '8',
      name: 'Tarde me lo comi',
      image: 'images/series/Spider-Manlejosdecasa.webp',
      description: 'La verdad que esta es una descripcion de prueba ya que no se me ocurre nada para escribir, tenga en cuenta que tengo que gacer mis servicos de estado para las series.',
      year: 2019,
      gender: 'romance',
      rating: 8.5
    }
  ]
}
