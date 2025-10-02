import { Injectable, signal, WritableSignal } from '@angular/core';
import { Song } from '../../models/music/songs';

@Injectable({
  providedIn: 'root'
})
export class StateSectionAddSongToListService {

  public listAllSongs: WritableSignal<Song[]> = signal([]);
  public listAllSongsFiltered: WritableSignal<Song[]> = signal(this.listAllSongs());
  public listSongsSelected: WritableSignal<Song[]> = signal([]);

  public isSongSelected(song: Song): boolean {
    return this.listSongsSelected().some(item => item.id === song.id);
  }

  public deleteSongSelected(song: Song): void {
    this.listSongsSelected.update(list => list.filter(item => item.id !== song.id));
    console.log("el listado de canciones seleccionadas 2: ", this.listSongsSelected())
  }

  public addSongToList(song: Song): void {
    this.listSongsSelected.update(list => [...list, song]);
    console.log("el listado de canciones seleccionadas 1: ", this.listSongsSelected())
  }

  public filteredSongsByName(value: string): void {
    this.listAllSongsFiltered.set(this.listAllSongs().filter(song => song.name.toLowerCase().includes(value.toLowerCase())));
  }
}
