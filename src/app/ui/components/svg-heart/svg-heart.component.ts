import { Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-svg-heart',
  imports: [],
  templateUrl: './svg-heart.component.html',
  styles: [
    `
    :host-context {
        display: contents;
    }

    svg {
      color: var(--white-color);
    }

    svg:hover {
      cursor: pointer;
      color: var(--primary-color);
    }
    `
  ]
})
export class SvgHeartComponent {
  public width: InputSignal<string> = input<string>("100%");
  public height: InputSignal<string> = input<string>("100%");
}
