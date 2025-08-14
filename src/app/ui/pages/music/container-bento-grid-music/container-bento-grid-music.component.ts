import { Component } from '@angular/core';
import { SectionNewsComponent } from './section-news/section-news.component';
import { SectionArtistsComponent } from "./section-artists/section-artists.component";

@Component({
  selector: 'app-container-bento-grid-music',
  imports: [SectionNewsComponent, SectionArtistsComponent],
  templateUrl: './container-bento-grid-music.component.html',
  styleUrl: './container-bento-grid-music.component.css'
})
export class ContainerBentoGridMusicComponent {

}
