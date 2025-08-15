import { Component } from '@angular/core';
import { SectionNewsComponent } from './section-news/section-news.component';
import { SectionArtistsComponent } from "./section-artists/section-artists.component";
import { SectionTrendsComponent } from "./section-trends/section-trends.component";
import { SectionNewMusicComponent } from "./section-new-music/section-new-music.component";
import { SectionSearchComponent } from "./section-search/section-search.component";

@Component({
  selector: 'app-container-bento-grid-music',
  imports: [SectionNewsComponent, SectionArtistsComponent, SectionTrendsComponent, SectionNewMusicComponent, SectionSearchComponent],
  templateUrl: './container-bento-grid-music.component.html',
  styleUrl: './container-bento-grid-music.component.css'
})
export class ContainerBentoGridMusicComponent {

}
