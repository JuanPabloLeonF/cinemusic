import { Injectable, signal, WritableSignal } from '@angular/core';
import { Song } from '../../models/music/songs';
import { CategoriesEnum, TypeSearch, TypeSearchEnum } from '../../models/music/category';

@Injectable({
  providedIn: 'root'
})
export class StateSectionMainMusicService {

  public listDataSongs: WritableSignal<Song[]> = signal<Song[]>([]);
  public listSongsFiltered: WritableSignal<Song[]> = signal<Song[]>([]);

  public setListDataSongs(listDataSongs: Song[]): void {
    this.listDataSongs.set(listDataSongs);
    this.listSongsFiltered.set(listDataSongs);
  }

  public changeFilteredSongs(filter: TypeSearch): Song[] {
    if (filter.value.trim() === "") {
      this.resetFilter();
      return this.listSongsFiltered();
    }
    switch (filter.type) {
      case TypeSearchEnum.CATEGORY: {
        this.filteredByCategory(filter.value);
        break;
      }
      case TypeSearchEnum.SEARCH: {
        this.filteredBySearch(filter.value);
        break;
      }
      case TypeSearchEnum.ARTIST: {
        this.filteredByArtist(filter.value);
      }
    }

    return this.listSongsFiltered();
  }

  private filteredByArtist(artist: String) {
    this.listSongsFiltered.set(this.listDataSongs().filter(song => song.artist.toLowerCase() === artist.toLowerCase()));
  }

  private filteredByCategory(category: String) {
    this.listSongsFiltered.set(this.listDataSongs().filter(song => song.gender.toLowerCase() === category.toLowerCase()));
  }

  private filteredBySearch(search: String): void {
    this.listSongsFiltered.set(this.listDataSongs().filter(song => song.name.toLowerCase().includes(search.toLowerCase())));
  }

  private resetFilter(): void {
    this.listSongsFiltered.set(this.listDataSongs());
  }
}
