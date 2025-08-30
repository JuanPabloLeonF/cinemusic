import { Component, inject, input, InputSignal, WritableSignal } from '@angular/core';
import { TypeSearchEnum, TypeSvgSearch } from '../../../domain/models/music/category';
import { StateMusicService } from '../../../domain/states/music/state-music.service';

@Component({
  selector: 'app-svg-gender',
  imports: [],
  templateUrl: './svg-gender.component.html',
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
export class SvgGenderComponent {
  private stateMusicService: StateMusicService = inject(StateMusicService);
  protected activationGender: WritableSignal<boolean> = this.stateMusicService.stateSectionSearchService.activationGender;
  public width: InputSignal<string> = input<string>("100%");
  public height: InputSignal<string> = input<string>("100%");
  public color: InputSignal<string> = input("white");
  public colorHover: InputSignal<string> = input("red");

  protected onActivateSvg(): void {
    this.stateMusicService.stateSectionSearchService.setStateElements(TypeSearchEnum.CATEGORY)
    this.activationGender.set(!this.activationGender())
  }
}
