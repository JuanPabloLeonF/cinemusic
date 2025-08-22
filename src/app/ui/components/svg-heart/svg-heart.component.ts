import { NgClass } from '@angular/common';
import { Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-svg-heart',
  imports: [NgClass],
  templateUrl: './svg-heart.component.html',
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

    .favorite {
      color: var(--primary-color);
    }

    .not-favorite {
      color: var(--white-color);
    }
    `
  ]
})
export class SvgHeartComponent {
  public width: InputSignal<string> = input<string>("100%");
  public height: InputSignal<string> = input<string>("100%");
  public isFavorite: InputSignal<boolean> = input<boolean>(false);
}
