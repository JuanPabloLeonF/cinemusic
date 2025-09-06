import { Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-svg-back',
  imports: [],
  templateUrl: './svg-back.component.html',
  styles: [
    `
    :host-context {
        display: contents;
    }

    svg {
      cursor: pointer;
      transition: color 0.2s ease-in-out;
    }

    svg:hover {
      color: var(--primary-color);
    }
    `
  ]
})
export class SvgBackComponent {
  public width: InputSignal<string> = input<string>("2rem");
  public height: InputSignal<string> = input<string>("2rem");
  public color: InputSignal<string> = input<string>("white");
}
