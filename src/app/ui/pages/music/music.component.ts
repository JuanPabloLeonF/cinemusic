import { Component, signal, Signal, WritableSignal } from '@angular/core';
import { SectionMainMusicComponent } from './section-main-music/section-main-music.component';
import { MusicPlayerComponent } from './music-player/music-player.component';
import { Song } from '../../../domain/models/music/songs';
import { listDataMusicData } from '../../../domain/utils/data/music';
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

    protected listSongs: Song[] = listDataMusicData;
    protected songSelected: WritableSignal<Song> = signal<Song>({} as Song);

    protected songSelectedEvent(song: Song) {
      this.songSelected().isPlaying = false;
      this.songSelected.set(song);
      this.songSelected().isPlaying = true;
    }

    protected selectedNewSong(value: boolean): void {
      this.songSelected().isPlaying = false;
      if (value) {
        this.songSelected.set(this.listSongs[Math.floor(Math.random() * this.listSongs.length)]);
        this.songSelected().isPlaying = true;
      } else {
        this.songSelected.set(this.listSongs[0]);
        this.songSelected().isPlaying = true;
      }
    }

    protected changeSong(value: string): void {
      this.songSelected().isPlaying = false;
      if (value === 'back') {
        this.songSelected.set(this.listSongs[this.listSongs.indexOf(this.songSelected()) - 1]);
        this.songSelected().isPlaying = true;
      } else if (value === 'next') {
        this.songSelected.set(this.listSongs[this.listSongs.indexOf(this.songSelected()) + 1]);
        this.songSelected().isPlaying = true;
      }
    }

    protected addList(): void {
      alert("Agregar lista ");
    }
}
