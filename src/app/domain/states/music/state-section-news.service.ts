import { Injectable, signal, WritableSignal } from '@angular/core';
import { Song } from '../../models/music/songs';

@Injectable({
  providedIn: 'root'
})
export class StateSectionNewsService {

  //Nota recuerda que debe traer del backend la cancion mas escuchada y el artista mas escuchado

  private selectedSong: WritableSignal<Song> = signal<Song>({} as Song); 

  public setSelectedSong(selectedSong: Song) {
    this.selectedSong.set(selectedSong);
  }

  public getSelectedSong(): Song {
    return this.selectedSong();
  }
}
