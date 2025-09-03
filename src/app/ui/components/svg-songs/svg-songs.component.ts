import { Component, ElementRef, HostListener, inject, input, InputSignal, output, OutputEmitterRef, WritableSignal } from '@angular/core';
import { TypeSearchEnum, TypeSvgSearch } from '../../../domain/models/music/category';
import { StateMusicService } from '../../../domain/states/music/state-music.service';

@Component({
  selector: 'app-svg-songs',
  imports: [],
  templateUrl: './svg-songs.component.html',
  styles: [
      `
      :host-context {
        display: contents;
      }

      svg {
        cursor: pointer;
        transition: fill 0.3s ease;
      }
      `
    ]
})
export class SvgSongsComponent {

  private stateMusicService: StateMusicService = inject(StateMusicService);
  protected activationSong: WritableSignal<boolean> = this.stateMusicService.stateSectionSearchService.activationSong;
  public width: InputSignal<string> = input<string>("100%");
  public height: InputSignal<string> = input<string>("100%");
  public color: InputSignal<string> = input("white");
  public colorHover: InputSignal<string> = input("red");

  protected onActivateSvg(): void {
    this.stateMusicService.stateSectionSearchService.setStateElements(TypeSearchEnum.SEARCH)
    this.activationSong.set(!this.activationSong());
  }
}
