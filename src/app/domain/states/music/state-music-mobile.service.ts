import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatesMusicMobileService {

  public activateMenu: WritableSignal<boolean> = signal<boolean>(false);

  public switchMenu(value: boolean): void {
    this.activateMenu.set(value);
  }
}
