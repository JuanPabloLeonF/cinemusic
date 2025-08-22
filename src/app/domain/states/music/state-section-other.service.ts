import { Injectable, signal, WritableSignal } from '@angular/core';
import { Song } from '../../models/music/songs';

@Injectable({
  providedIn: 'root'
})
export class StateSectionOtherService {

  private selectedListSongs: WritableSignal<Song[]> = signal<Song[]>([]); 

  public setSelectedListSongs(selectedListSong: Song[]) {
    this.selectedListSongs.set(selectedListSong);
  }

  public getSelectedListSongs(): Song[] {
    return this.selectedListSongs();
  }
}
