import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InputIconSearchComponent } from "../../../components/input-icon-search/input-icon-search.component";
import { Series } from '../../../../domain/models/series/series';

@Component({
  selector: 'app-section-gender-series',
  imports: [RouterModule, InputIconSearchComponent],
  templateUrl: './section-gender-series.component.html',
  styleUrl: './section-gender-series.component.css'
})
export class SectionGenderSeriesComponent {

  protected seriesListData: Series[] = [
  {
    "id": "1",
    "name": "Horizonte Final",
    "image": "images/series/Spider-Manlejosdecasa.webp",
    "description": "Un grupo de científicos descubre una señal proveniente de los límites del universo que podría cambiar el destino de la humanidad.",
    "year": 2021,
    "gender": "accion",
    "rating": 8.4
  },
  {
    "id": "2",
    "name": "Sombras del Pasado",
    "image": "images/music/song1.jpg",
    "description": "Un detective retirado se ve obligado a enfrentar un caso sin resolver que marcó su carrera.",
    "year": 2019,
    "gender": "Suspenso",
    "rating": 8.1
  },
  {
    "id": "3",
    "name": "Reinos de Fuego",
    "image": "images/music/song2.jpg",
    "description": "Varias casas luchan por el control de un continente dominado por dragones y antiguas profecías.",
    "year": 2022,
    "gender": "Fantasía",
    "rating": 8.7
  },
  {
    "id": "4",
    "name": "Código Interno",
    "image": "images/music/song3.jpeg",
    "description": "Una ingeniera de software se infiltra en una corporación para destapar una red de corrupción tecnológica.",
    "year": 2020,
    "gender": "Drama",
    "rating": 7.9
  },
  {
    "id": "5",
    "name": "Bajo la Ciudad",
    "image": "images/music/song4.jpg",
    "description": "Un periodista investiga una sociedad secreta que opera en los túneles olvidados de la ciudad.",
    "year": 2018,
    "gender": "Misterio",
    "rating": 7.8
  },
  {
    "id": "6",
    "name": "Órbita Cero",
    "image": "images/music/song5.jpg",
    "description": "Tras un accidente espacial, una tripulación queda atrapada en una estación que se está quedando sin oxígeno.",
    "year": 2023,
    "gender": "Ciencia ficción",
    "rating": 8.6
  },
  {
    "id": "7",
    "name": "Corazones en Ruinas",
    "image": "images/music/song7.jpg",
    "description": "Historias cruzadas de amor y pérdida en una ciudad que intenta reconstruirse después de una tragedia.",
    "year": 2017,
    "gender": "Romance",
    "rating": 7.5
  },
  {
    "id": "8",
    "name": "La Última Frontera",
    "image": "images/music/song6.jpg",
    "description": "Una colonia humana en un planeta lejano lucha por sobrevivir frente a amenazas desconocidas.",
    "year": 2024,
    "gender": "Aventura",
    "rating": 8.8
  },
  {
    "id": "9",
    "name": "Distrito 9-B",
    "image": "images/music/metallica.jpg",
    "description": "Un grupo de agentes especiales investiga crímenes que desafían toda lógica en una zona restringida.",
    "year": 2016,
    "gender": "Acción",
    "rating": 7.6
  },
  {
    "id": "10",
    "name": "Ecos del Silencio",
    "image": "images/series/Spider-Manlejosdecasa.webp",
    "description": "Un pequeño pueblo oculta un secreto que resurge cuando comienzan a desaparecer sus habitantes.",
    "year": 2022,
    "gender": "Terror",
    "rating": 8.2
  },
  {
    "id": "1",
    "name": "Horizonte Final",
    "image": "images/series/Spider-Manlejosdecasa.webp",
    "description": "Un grupo de científicos descubre una señal proveniente de los límites del universo que podría cambiar el destino de la humanidad.",
    "year": 2021,
    "gender": "accion",
    "rating": 8.4
  },
  {
    "id": "2",
    "name": "Sombras del Pasado",
    "image": "images/music/song1.jpg",
    "description": "Un detective retirado se ve obligado a enfrentar un caso sin resolver que marcó su carrera.",
    "year": 2019,
    "gender": "Suspenso",
    "rating": 8.1
  },
  {
    "id": "3",
    "name": "Reinos de Fuego",
    "image": "images/music/song2.jpg",
    "description": "Varias casas luchan por el control de un continente dominado por dragones y antiguas profecías.",
    "year": 2022,
    "gender": "Fantasía",
    "rating": 8.7
  },
  {
    "id": "4",
    "name": "Código Interno",
    "image": "images/music/song3.jpeg",
    "description": "Una ingeniera de software se infiltra en una corporación para destapar una red de corrupción tecnológica.",
    "year": 2020,
    "gender": "Drama",
    "rating": 7.9
  },
  {
    "id": "5",
    "name": "Bajo la Ciudad",
    "image": "images/music/song4.jpg",
    "description": "Un periodista investiga una sociedad secreta que opera en los túneles olvidados de la ciudad.",
    "year": 2018,
    "gender": "Misterio",
    "rating": 7.8
  },
  {
    "id": "6",
    "name": "Órbita Cero",
    "image": "images/music/song5.jpg",
    "description": "Tras un accidente espacial, una tripulación queda atrapada en una estación que se está quedando sin oxígeno.",
    "year": 2023,
    "gender": "Ciencia ficción",
    "rating": 8.6
  },
  {
    "id": "7",
    "name": "Corazones en Ruinas",
    "image": "images/music/song7.jpg",
    "description": "Historias cruzadas de amor y pérdida en una ciudad que intenta reconstruirse después de una tragedia.",
    "year": 2017,
    "gender": "Romance",
    "rating": 7.5
  },
  {
    "id": "8",
    "name": "La Última Frontera",
    "image": "images/music/song6.jpg",
    "description": "Una colonia humana en un planeta lejano lucha por sobrevivir frente a amenazas desconocidas.",
    "year": 2024,
    "gender": "Aventura",
    "rating": 8.8
  },
  {
    "id": "9",
    "name": "Distrito 9-B",
    "image": "images/music/metallica.jpg",
    "description": "Un grupo de agentes especiales investiga crímenes que desafían toda lógica en una zona restringida.",
    "year": 2016,
    "gender": "Acción",
    "rating": 7.6
  },
  {
    "id": "10",
    "name": "Ecos del Silencio",
    "image": "images/series/Spider-Manlejosdecasa.webp",
    "description": "Un pequeño pueblo oculta un secreto que resurge cuando comienzan a desaparecer sus habitantes.",
    "year": 2022,
    "gender": "Terror",
    "rating": 8.2
  },
  {
    "id": "1",
    "name": "Horizonte Final",
    "image": "images/series/Spider-Manlejosdecasa.webp",
    "description": "Un grupo de científicos descubre una señal proveniente de los límites del universo que podría cambiar el destino de la humanidad.",
    "year": 2021,
    "gender": "accion",
    "rating": 8.4
  },
  {
    "id": "2",
    "name": "Sombras del Pasado",
    "image": "images/music/song1.jpg",
    "description": "Un detective retirado se ve obligado a enfrentar un caso sin resolver que marcó su carrera.",
    "year": 2019,
    "gender": "Suspenso",
    "rating": 8.1
  },
  {
    "id": "3",
    "name": "Reinos de Fuego",
    "image": "images/music/song2.jpg",
    "description": "Varias casas luchan por el control de un continente dominado por dragones y antiguas profecías.",
    "year": 2022,
    "gender": "Fantasía",
    "rating": 8.7
  },
  {
    "id": "4",
    "name": "Código Interno",
    "image": "images/music/song3.jpeg",
    "description": "Una ingeniera de software se infiltra en una corporación para destapar una red de corrupción tecnológica.",
    "year": 2020,
    "gender": "Drama",
    "rating": 7.9
  },
  {
    "id": "5",
    "name": "Bajo la Ciudad",
    "image": "images/music/song4.jpg",
    "description": "Un periodista investiga una sociedad secreta que opera en los túneles olvidados de la ciudad.",
    "year": 2018,
    "gender": "Misterio",
    "rating": 7.8
  },
  {
    "id": "6",
    "name": "Órbita Cero",
    "image": "images/music/song5.jpg",
    "description": "Tras un accidente espacial, una tripulación queda atrapada en una estación que se está quedando sin oxígeno.",
    "year": 2023,
    "gender": "Ciencia ficción",
    "rating": 8.6
  },
  {
    "id": "7",
    "name": "Corazones en Ruinas",
    "image": "images/music/song7.jpg",
    "description": "Historias cruzadas de amor y pérdida en una ciudad que intenta reconstruirse después de una tragedia.",
    "year": 2017,
    "gender": "Romance",
    "rating": 7.5
  },
  {
    "id": "8",
    "name": "La Última Frontera",
    "image": "images/music/song6.jpg",
    "description": "Una colonia humana en un planeta lejano lucha por sobrevivir frente a amenazas desconocidas.",
    "year": 2024,
    "gender": "Aventura",
    "rating": 8.8
  },
  {
    "id": "9",
    "name": "Distrito 9-B",
    "image": "images/music/metallica.jpg",
    "description": "Un grupo de agentes especiales investiga crímenes que desafían toda lógica en una zona restringida.",
    "year": 2016,
    "gender": "Acción",
    "rating": 7.6
  },
  {
    "id": "10",
    "name": "Ecos del Silencio",
    "image": "images/series/Spider-Manlejosdecasa.webp",
    "description": "Un pequeño pueblo oculta un secreto que resurge cuando comienzan a desaparecer sus habitantes.",
    "year": 2022,
    "gender": "Terror",
    "rating": 8.2
  },
  {
    "id": "1",
    "name": "Horizonte Final",
    "image": "images/series/Spider-Manlejosdecasa.webp",
    "description": "Un grupo de científicos descubre una señal proveniente de los límites del universo que podría cambiar el destino de la humanidad.",
    "year": 2021,
    "gender": "accion",
    "rating": 8.4
  },
  {
    "id": "2",
    "name": "Sombras del Pasado",
    "image": "images/music/song1.jpg",
    "description": "Un detective retirado se ve obligado a enfrentar un caso sin resolver que marcó su carrera.",
    "year": 2019,
    "gender": "Suspenso",
    "rating": 8.1
  },
  {
    "id": "3",
    "name": "Reinos de Fuego",
    "image": "images/music/song2.jpg",
    "description": "Varias casas luchan por el control de un continente dominado por dragones y antiguas profecías.",
    "year": 2022,
    "gender": "Fantasía",
    "rating": 8.7
  },
  {
    "id": "4",
    "name": "Código Interno",
    "image": "images/music/song3.jpeg",
    "description": "Una ingeniera de software se infiltra en una corporación para destapar una red de corrupción tecnológica.",
    "year": 2020,
    "gender": "Drama",
    "rating": 7.9
  },
  {
    "id": "5",
    "name": "Bajo la Ciudad",
    "image": "images/music/song4.jpg",
    "description": "Un periodista investiga una sociedad secreta que opera en los túneles olvidados de la ciudad.",
    "year": 2018,
    "gender": "Misterio",
    "rating": 7.8
  },
  {
    "id": "6",
    "name": "Órbita Cero",
    "image": "images/music/song5.jpg",
    "description": "Tras un accidente espacial, una tripulación queda atrapada en una estación que se está quedando sin oxígeno.",
    "year": 2023,
    "gender": "Ciencia ficción",
    "rating": 8.6
  },
  {
    "id": "7",
    "name": "Corazones en Ruinas",
    "image": "images/music/song7.jpg",
    "description": "Historias cruzadas de amor y pérdida en una ciudad que intenta reconstruirse después de una tragedia.",
    "year": 2017,
    "gender": "Romance",
    "rating": 7.5
  },
  {
    "id": "8",
    "name": "La Última Frontera",
    "image": "images/music/song6.jpg",
    "description": "Una colonia humana en un planeta lejano lucha por sobrevivir frente a amenazas desconocidas.",
    "year": 2024,
    "gender": "Aventura",
    "rating": 8.8
  },
  {
    "id": "9",
    "name": "Distrito 9-B",
    "image": "images/music/metallica.jpg",
    "description": "Un grupo de agentes especiales investiga crímenes que desafían toda lógica en una zona restringida.",
    "year": 2016,
    "gender": "Acción",
    "rating": 7.6
  },
  {
    "id": "10",
    "name": "Ecos del Silencio",
    "image": "images/series/Spider-Manlejosdecasa.webp",
    "description": "Un pequeño pueblo oculta un secreto que resurge cuando comienzan a desaparecer sus habitantes.",
    "year": 2022,
    "gender": "Terror",
    "rating": 8.2
  },
  {
    "id": "1",
    "name": "Horizonte Final",
    "image": "images/series/Spider-Manlejosdecasa.webp",
    "description": "Un grupo de científicos descubre una señal proveniente de los límites del universo que podría cambiar el destino de la humanidad.",
    "year": 2021,
    "gender": "accion",
    "rating": 8.4
  },
  {
    "id": "2",
    "name": "Sombras del Pasado",
    "image": "images/music/song1.jpg",
    "description": "Un detective retirado se ve obligado a enfrentar un caso sin resolver que marcó su carrera.",
    "year": 2019,
    "gender": "Suspenso",
    "rating": 8.1
  },
  {
    "id": "3",
    "name": "Reinos de Fuego",
    "image": "images/music/song2.jpg",
    "description": "Varias casas luchan por el control de un continente dominado por dragones y antiguas profecías.",
    "year": 2022,
    "gender": "Fantasía",
    "rating": 8.7
  },
  {
    "id": "4",
    "name": "Código Interno",
    "image": "images/music/song3.jpeg",
    "description": "Una ingeniera de software se infiltra en una corporación para destapar una red de corrupción tecnológica.",
    "year": 2020,
    "gender": "Drama",
    "rating": 7.9
  },
  {
    "id": "5",
    "name": "Bajo la Ciudad",
    "image": "images/music/song4.jpg",
    "description": "Un periodista investiga una sociedad secreta que opera en los túneles olvidados de la ciudad.",
    "year": 2018,
    "gender": "Misterio",
    "rating": 7.8
  },
  {
    "id": "6",
    "name": "Órbita Cero",
    "image": "images/music/song5.jpg",
    "description": "Tras un accidente espacial, una tripulación queda atrapada en una estación que se está quedando sin oxígeno.",
    "year": 2023,
    "gender": "Ciencia ficción",
    "rating": 8.6
  },
  {
    "id": "7",
    "name": "Corazones en Ruinas",
    "image": "images/music/song7.jpg",
    "description": "Historias cruzadas de amor y pérdida en una ciudad que intenta reconstruirse después de una tragedia.",
    "year": 2017,
    "gender": "Romance",
    "rating": 7.5
  },
  {
    "id": "8",
    "name": "La Última Frontera",
    "image": "images/music/song6.jpg",
    "description": "Una colonia humana en un planeta lejano lucha por sobrevivir frente a amenazas desconocidas.",
    "year": 2024,
    "gender": "Aventura",
    "rating": 8.8
  },
  {
    "id": "9",
    "name": "Distrito 9-B",
    "image": "images/music/metallica.jpg",
    "description": "Un grupo de agentes especiales investiga crímenes que desafían toda lógica en una zona restringida.",
    "year": 2016,
    "gender": "Acción",
    "rating": 7.6
  },
  {
    "id": "10",
    "name": "Ecos del Silencio",
    "image": "images/series/Spider-Manlejosdecasa.webp",
    "description": "Un pequeño pueblo oculta un secreto que resurge cuando comienzan a desaparecer sus habitantes.",
    "year": 2022,
    "gender": "Terror",
    "rating": 8.2
  },
  {
    "id": "1",
    "name": "Horizonte Final",
    "image": "images/series/Spider-Manlejosdecasa.webp",
    "description": "Un grupo de científicos descubre una señal proveniente de los límites del universo que podría cambiar el destino de la humanidad.",
    "year": 2021,
    "gender": "accion",
    "rating": 8.4
  },
  {
    "id": "2",
    "name": "Sombras del Pasado",
    "image": "images/music/song1.jpg",
    "description": "Un detective retirado se ve obligado a enfrentar un caso sin resolver que marcó su carrera.",
    "year": 2019,
    "gender": "Suspenso",
    "rating": 8.1
  },
  {
    "id": "3",
    "name": "Reinos de Fuego",
    "image": "images/music/song2.jpg",
    "description": "Varias casas luchan por el control de un continente dominado por dragones y antiguas profecías.",
    "year": 2022,
    "gender": "Fantasía",
    "rating": 8.7
  },
  {
    "id": "4",
    "name": "Código Interno",
    "image": "images/music/song3.jpeg",
    "description": "Una ingeniera de software se infiltra en una corporación para destapar una red de corrupción tecnológica.",
    "year": 2020,
    "gender": "Drama",
    "rating": 7.9
  },
  {
    "id": "5",
    "name": "Bajo la Ciudad",
    "image": "images/music/song4.jpg",
    "description": "Un periodista investiga una sociedad secreta que opera en los túneles olvidados de la ciudad.",
    "year": 2018,
    "gender": "Misterio",
    "rating": 7.8
  },
  {
    "id": "6",
    "name": "Órbita Cero",
    "image": "images/music/song5.jpg",
    "description": "Tras un accidente espacial, una tripulación queda atrapada en una estación que se está quedando sin oxígeno.",
    "year": 2023,
    "gender": "Ciencia ficción",
    "rating": 8.6
  },
  {
    "id": "7",
    "name": "Corazones en Ruinas",
    "image": "images/music/song7.jpg",
    "description": "Historias cruzadas de amor y pérdida en una ciudad que intenta reconstruirse después de una tragedia.",
    "year": 2017,
    "gender": "Romance",
    "rating": 7.5
  },
  {
    "id": "8",
    "name": "La Última Frontera",
    "image": "images/music/song6.jpg",
    "description": "Una colonia humana en un planeta lejano lucha por sobrevivir frente a amenazas desconocidas.",
    "year": 2024,
    "gender": "Aventura",
    "rating": 8.8
  },
  {
    "id": "9",
    "name": "Distrito 9-B",
    "image": "images/music/metallica.jpg",
    "description": "Un grupo de agentes especiales investiga crímenes que desafían toda lógica en una zona restringida.",
    "year": 2016,
    "gender": "Acción",
    "rating": 7.6
  },
  {
    "id": "10",
    "name": "Ecos del Silencio",
    "image": "images/series/Spider-Manlejosdecasa.webp",
    "description": "Un pequeño pueblo oculta un secreto que resurge cuando comienzan a desaparecer sus habitantes.",
    "year": 2022,
    "gender": "Terror",
    "rating": 8.2
  }
];

}
  