import { Component, signal, Signal, WritableSignal } from '@angular/core';
import { SectionMainMusicComponent } from './section-main-music/section-main-music.component';
import { MusicPlayerComponent } from './music-player/music-player.component';
import { Song } from '../../../domain/models/music/songs';
import { ButtonGenericComponent } from "../../components/button-generic/button-generic.component";

@Component({
  imports: [
    SectionMainMusicComponent,
    MusicPlayerComponent,
    ButtonGenericComponent
  ],
  templateUrl: './music.component.html',
  styleUrl: './music.component.css'
})
export class MusicComponent {

    protected addList(): void {
      alert("Agregar lista ");
    }
}
