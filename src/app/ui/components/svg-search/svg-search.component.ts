import { Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-svg-search',
  imports: [],
  templateUrl: './svg-search.component.html',
  styles: [
    `
    :host-context {
        display: contents;
    }

    svg {
      z-index: 3;
      color: var(--color-gray-secondary);
    }

    svg:hover {
      color: var(--primary-color);
    }
    `
  ]
})
export class SvgSearchComponent {
  public width: InputSignal<string> = input<string>("100%");
  public height: InputSignal<string> = input<string>("100%");
}
