import { Component, signal, Signal, WritableSignal } from '@angular/core';
import { NavMusicComponent } from './nav-music/nav-music.component';
import { SectionMainMusicComponent } from './section-main-music/section-main-music.component';
import { MusicPlayerComponent } from './music-player/music-player.component';
import { Song } from '../../../domain/models/music/songs';
import { listDataMusicData } from '../../../domain/utils/data/music';
import { ListMusicPlayerComponent } from './list-music-player/list-music-player.component';

@Component({
  selector: 'app-music',
  imports: [
    NavMusicComponent,
    SectionMainMusicComponent,
    MusicPlayerComponent,
    ListMusicPlayerComponent
  ],
  templateUrl: './music.component.html',
  styleUrl: './music.component.css'
})
export class MusicComponent {

    protected listSongs: Song[] = listDataMusicData;
    protected songSelected: WritableSignal<Song> = signal<Song>({} as Song);

    protected selectedNewSong(value: boolean): void {
      if (value) {
        this.songSelected.set(this.listSongs[Math.floor(Math.random() * this.listSongs.length)]);
      } else {
        this.songSelected.set(this.listSongs[0]);
      }
    }

    protected changeSong(value: string): void {
      if (value === 'back') {
        this.songSelected.set(this.listSongs[this.listSongs.indexOf(this.songSelected()) - 1]);
      } else if (value === 'next') {
        this.songSelected.set(this.listSongs[this.listSongs.indexOf(this.songSelected()) + 1]);
      }
    }
}
