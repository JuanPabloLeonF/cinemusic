import { Component, input, InputSignal, output, OutputEmitterRef } from '@angular/core';
import { TypeSearchEnum, TypeSvgSearch } from '../../../domain/models/music/category';

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
  public width: InputSignal<string> = input<string>("100%");
  public height: InputSignal<string> = input<string>("100%");
  public color: InputSignal<string> = input("white");
  public colorHover: InputSignal<string> = input("red");
  public activateSvg: OutputEmitterRef<TypeSvgSearch> = output<TypeSvgSearch>();
  protected colorActive: boolean = false;
  public isHovering: boolean = false;

  protected currentFill(): string {
    if (this.colorActive) return this.colorHover();
    if (this.isHovering) return this.colorHover();
    return this.color();
  }

  protected onActivateSvg(value: boolean): void {
    this.colorActive = value;
    this.activateSvg.emit({
      type: TypeSearchEnum.SEARCH,
      value: value
    });
  }
}
