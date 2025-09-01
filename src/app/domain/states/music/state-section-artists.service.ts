import { Injectable, signal, WritableSignal } from '@angular/core';
import { Artis } from '../../models/music/artis';

@Injectable({
  providedIn: 'root'
})
export class StateSectionArtistsService {
  public selectedArtist: WritableSignal<Artis> = signal<Artis>({} as Artis); 
}
