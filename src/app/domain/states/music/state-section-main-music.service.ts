import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateSectionMainMusicService {

  public showToggleFormularyCreatedListMusic: WritableSignal<boolean> = signal<boolean>(false);
}
