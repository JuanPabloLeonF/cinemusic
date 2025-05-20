import { Component } from '@angular/core';
import { NavMusicComponent } from './nav-music/nav-music.component';
import { SectionMainMusicComponent } from './section-main-music/section-main-music.component';
import { MusicPlayerComponent } from './music-player/music-player.component';
import { Song } from '../../../domain/models/music/songs';
import { listDataMusicData } from '../../../domain/utils/data/music';

@Component({
  selector: 'app-music',
  imports: [
    NavMusicComponent,
    SectionMainMusicComponent,
    MusicPlayerComponent
  ],
  templateUrl: './music.component.html',
  styleUrl: './music.component.css'
})
export class MusicComponent {
    public songSelected:Song = listDataMusicData[0];
}
