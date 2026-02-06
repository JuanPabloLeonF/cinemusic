import { ChangeDetectionStrategy, Component, ElementRef, input, InputSignal, ViewChild } from '@angular/core';

@Component({
  selector: 'app-svg-search',
  imports: [],
  templateUrl: './svg-search.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
    :host-context {
        display: contents;
    }

    svg {
      z-index: 3;
    }

    svg:hover {
      cursor: pointer;
    }
    `
  ]
})
export class SvgSearchComponent {

  @ViewChild('svg') svg!: ElementRef<SVGElement>;

  public width: InputSignal<string> = input<string>("100%");
  public height: InputSignal<string> = input<string>("100%");
  public color: InputSignal<string> = input<string>("white");
  public colorHover: InputSignal<string> = input<string>("red");

  protected onHover(): void {
    const svg: SVGElement = this.svg.nativeElement;
    svg.style.color = this.colorHover();
  }

  protected onBlur(): void {
    const svg: SVGElement = this.svg.nativeElement;
    svg.style.color = this.color();
  }
}
