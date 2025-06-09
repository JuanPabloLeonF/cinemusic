import { Component, HostListener, input, InputSignal, output, OutputEmitterRef } from '@angular/core';
import { CardOptionsComponent } from "./card-options/card-options.component";
import { Song } from '../../../../../domain/models/music/songs';
import { NgClass } from '@angular/common';
import { WobbleDirective } from '../../../../animations/wobble/wobble.directive';

@Component({
  selector: 'app-container-song-item',
  imports: [
    NgClass,
    CardOptionsComponent,
    WobbleDirective
  ],
  templateUrl: './container-song-item.component.html',
  styleUrl: './container-song-item.component.css'
})
export class ContainerSongItemComponent {

  
  public inputSongSelected: InputSignal<Song> = input<Song>({} as Song);
  public songOuputSelected: OutputEmitterRef<Song> = output<Song>();
  protected showCardOptions: boolean = false;

  protected toogleCardOptions() {
    this.showCardOptions = !this.showCardOptions;
  }

  protected playSong() {
    this.songOuputSelected.emit(this.inputSongSelected());
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
