import { ChangeDetectionStrategy, Component, inject, input, InputSignal, WritableSignal } from '@angular/core';
import { TypeSearchEnum, TypeSvgSearch } from '../../../domain/models/music/category';
import { StateMusicService } from '../../../domain/states/music/state-music.service';

@Component({
  selector: 'app-svg-singer',
  imports: [],
  templateUrl: './svg-singer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
      `
      :host-context {
        display: contents;
      }

      svg {
        cursor: pointer;
        transition: fill 0.3s ease;
      }
      svg path {
        fill: inherit;
      }

      `
    ]
})
export class SvgSingerComponent {
  private stateMusicService: StateMusicService = inject(StateMusicService);
  protected activationSinger: WritableSignal<boolean> = this.stateMusicService.stateSectionSearchService.activationSinger;
  public width: InputSignal<string> = input<string>("100%");
  public height: InputSignal<string> = input<string>("100%");
  public color: InputSignal<string> = input("white");
  public colorHover: InputSignal<string> = input("red");

  protected onActivateSvg(): void {
    this.stateMusicService.stateSectionSearchService.setStateElements(TypeSearchEnum.ARTIST)
    this.activationSinger.set(!this.activationSinger())
  }
}
