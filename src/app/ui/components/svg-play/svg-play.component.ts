import { Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-svg-play',
  imports: [],
  templateUrl: './svg-play.component.html',
  styles: [
    `
    :host-context {
        display: contents;
    }
    `
  ]
})
export class SvgPlayComponent {
  public width: InputSignal<string> = input<string>("100%");
  public height: InputSignal<string> = input<string>("100%");
  public color: InputSignal<string> = input<string>("white");
}
