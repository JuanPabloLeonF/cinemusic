import { Injectable, signal, WritableSignal } from '@angular/core';
import { PlayList } from '../../models/music/play-list';

@Injectable({
  providedIn: 'root'
})
export class StateSectionPlayListService {

  private dataPlayList: WritableSignal<PlayList> = signal<PlayList>({} as PlayList);
  public toogleFormulary: WritableSignal<boolean> = signal<boolean>(false);
  public toogleAddSong: WritableSignal<boolean> = signal<boolean>(false);

  public getDataPlayList(): PlayList {
    return this.dataPlayList();
  }

  public setDataPlayList(data: PlayList): void {
    this.dataPlayList.set(data);
  }
}
