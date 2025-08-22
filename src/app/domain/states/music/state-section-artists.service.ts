import { Injectable, signal, WritableSignal } from '@angular/core';
import { Artis } from '../../models/music/artis';

@Injectable({
  providedIn: 'root'
})
export class StateSectionArtistsService {

  private selectedArtist: WritableSignal<Artis> = signal<Artis>({} as Artis); 

  public setSelectedArtist(selectedArtist: Artis) {
    this.selectedArtist.set(selectedArtist);
  }

  public getSelectedArtist(): Artis {
    return this.selectedArtist();
  }
}
