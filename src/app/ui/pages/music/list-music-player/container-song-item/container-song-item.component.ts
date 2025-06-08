import { Component, HostListener, input, InputSignal } from '@angular/core';
import { CardOptionsComponent } from "./card-options/card-options.component";
import { Song } from '../../../../../domain/models/music/songs';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-container-song-item',
  imports: [NgClass ,CardOptionsComponent],
  templateUrl: './container-song-item.component.html',
  styleUrl: './container-song-item.component.css'
})
export class ContainerSongItemComponent {

  public inputSong: InputSignal<Song> = input<Song>({} as Song);
  protected showCardOptions: boolean = false;

  protected toogleCardOptions() {
    this.showCardOptions = !this.showCardOptions;
  }

  @HostListener('document:click', ['$event'])
  protected onClick(event: MouseEvent): void {
    if (!event.target) {
      return;
    }
    const target = event.target as HTMLElement;
    if (!target.closest('.container-item')) {
      this.showCardOptions = false;
    }
  }}
