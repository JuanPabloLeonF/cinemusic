import { Component } from '@angular/core';
import { NavMusicComponent } from './nav-music/nav-music.component';
import { SectionMainMusicComponent } from './section-main-music/section-main-music.component';

@Component({
  selector: 'app-music',
  imports: [NavMusicComponent, SectionMainMusicComponent],
  templateUrl: './music.component.html',
  styleUrl: './music.component.css'
})
export class MusicComponent {

}
