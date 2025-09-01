import { Injectable, signal, WritableSignal } from '@angular/core';
import { ListSongs } from '../../models/music/play-list';

@Injectable({
  providedIn: 'root'
})
export class StateFormularyCreateListService {
  public listsDataOfSongs: WritableSignal<ListSongs[]> = signal<ListSongs[]>([]);
}
