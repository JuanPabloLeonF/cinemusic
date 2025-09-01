import { Component, inject, WritableSignal } from '@angular/core';
import { SectionMainMusicComponent } from './section-main-music/section-main-music.component';
import { FormularyCreateListMusicComponent } from './formulary-create-list-music/formulary-create-list-music.component';
import { ContainerBentoGridMusicComponent } from "./container-bento-grid-music/container-bento-grid-music.component";
import { StateSectionMainMusicService } from '../../../domain/states/music/state-section-main-music.service';
import { StateMusicService } from '../../../domain/states/music/state-music.service';

@Component({
  imports: [
    SectionMainMusicComponent,
    FormularyCreateListMusicComponent,
    ContainerBentoGridMusicComponent
],
  templateUrl: './music.component.html',
  styleUrl: './music.component.css'
})
export class MusicComponent {

  private stateMusicService: StateMusicService = inject(StateMusicService);
  protected toogleFormulary: WritableSignal<boolean> = this.stateMusicService.toogleFormulary;
  protected toogleAddSong: WritableSignal<boolean> = this.stateMusicService.toogleAddSong;
}
