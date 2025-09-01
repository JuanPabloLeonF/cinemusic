import { Injectable, signal, WritableSignal } from '@angular/core';
import { Song } from '../../models/music/songs';

@Injectable({
  providedIn: 'root'
})
export class StateSectionNewsService {
  public selectedSong: WritableSignal<Song> = signal<Song>({} as Song); 
}
