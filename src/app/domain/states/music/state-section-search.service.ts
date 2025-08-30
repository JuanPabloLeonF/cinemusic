import { Injectable, signal, WritableSignal } from '@angular/core';
import { TypeSearch, TypeSearchEnum, TypeSvgSearch } from '../../models/music/category';

@Injectable({
  providedIn: 'root'
})
export class StateSectionSearchService {

  public dataSearch: WritableSignal<TypeSearch> = signal<TypeSearch>({type: TypeSearchEnum.SEARCH ,value: "ALL"});
  public activationSong: WritableSignal<boolean> = signal<boolean>(true)
  public activationGender: WritableSignal<boolean> = signal<boolean>(false);
  public activationSinger: WritableSignal<boolean> = signal<boolean>(false);

  public setStateElements(data: string): void {
    if (data === TypeSearchEnum.ARTIST) {
      this.activationSong.set(false);
      this.activationGender.set(false);
      this.dataSearch.set({type: TypeSearchEnum.ARTIST, value: "ALL"})
    } else if (data === TypeSearchEnum.CATEGORY) {
      this.activationSong.set(false);
      this.activationSinger.set(false);
      this.dataSearch.set({type: TypeSearchEnum.CATEGORY, value: "ALL"})
    } else {
      this.activationSinger.set(false);
      this.activationGender.set(false);
      this.dataSearch.set({type: TypeSearchEnum.SEARCH, value: "ALL"})
    }
  }
}
