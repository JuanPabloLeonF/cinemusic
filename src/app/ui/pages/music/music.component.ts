import { Component, inject, WritableSignal } from '@angular/core';
import { SectionMainMusicComponent } from './section-main-music/section-main-music.component';
import { ContainerBentoGridMusicComponent } from "./container-bento-grid-music/container-bento-grid-music.component";
import { StateMusicService } from '../../../domain/states/music/state-music.service';
import { SectionPLayListSongsComponent } from "./section-play-list-songs/section-play-list-songs.component";

@Component({
  imports: [
    SectionMainMusicComponent,
    ContainerBentoGridMusicComponent,
    SectionPLayListSongsComponent
],
  templateUrl: './music.component.html',
  styleUrl: './music.component.css'
})
export class MusicComponent {

  protected stateMusicService: StateMusicService = inject(StateMusicService);
}
