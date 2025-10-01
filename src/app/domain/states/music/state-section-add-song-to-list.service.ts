import { Injectable, signal, WritableSignal } from '@angular/core';
import { Song } from '../../models/music/songs';

@Injectable({
  providedIn: 'root'
})
export class StateSectionAddSongToListService {

  public listAllSongs: WritableSignal<Song[]> = signal([]);
  public listAllSongsFiltered: WritableSignal<Song[]> = signal(this.listAllSongs());

  public filteredSongsByName(value: string): void {
    this.listAllSongsFiltered.set(this.listAllSongs().filter(song => song.name.toLowerCase().includes(value.toLowerCase())));
  }
}
