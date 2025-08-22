import { Injectable, signal, WritableSignal } from '@angular/core';
import { Song } from '../../models/music/songs';
import { CategoriesEnum, TypeSearch, TypeSearchEnum } from '../../models/music/category';

@Injectable({
  providedIn: 'root'
})
export class StateSectionMainMusicService {

  private listDataSongs: WritableSignal<Song[]> = signal<Song[]>([]);
  public listSongsFiltered: WritableSignal<Song[]> = signal<Song[]>([]);

  public getListDataSongs(): Song[] {
    return this.listDataSongs();
  }

  public setListDataSongs(listDataSongs: Song[]): void {
    this.listDataSongs.set(listDataSongs);
    this.listSongsFiltered.set(listDataSongs);
  }

  public changeFilteredSongs(filter: TypeSearch): void {
    switch (filter.type) {
      case TypeSearchEnum.CATEGORY: {
        this.filterByDataCategory(filter.value);
        break;
      }
      case TypeSearchEnum.SEARCH: {
        this.filteredBySearch(filter.value);
        break;
      }
    }
  }

  private filterByDataCategory(category: String): void {
    if (category === CategoriesEnum.ALL) {
      this.resetFilter();
    } else {
      this.filteredByCategory(category);
    }
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
