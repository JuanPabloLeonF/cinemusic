import { Injectable, signal, WritableSignal } from '@angular/core';
import { ListSongs } from '../../models/music/play-list';

@Injectable({
  providedIn: 'root'
})
export class StateMyListSongsService {

  public activateSection: WritableSignal<boolean> = signal<boolean>(false);
  public listsListSongs: WritableSignal<ListSongs[]> = signal<ListSongs[]>([]);
  public listSongsSelected: WritableSignal<ListSongs> = signal<ListSongs>({} as ListSongs);
}
