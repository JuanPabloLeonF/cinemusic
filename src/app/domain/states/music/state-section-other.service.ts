import { Injectable, signal, WritableSignal } from '@angular/core';
import { Song } from '../../models/music/songs';

@Injectable({
  providedIn: 'root'
})
export class StateSectionOtherService {
  public selectedListSongs: WritableSignal<Song[]> = signal<Song[]>([]); 
}
