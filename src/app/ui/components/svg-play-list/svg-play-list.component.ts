import { Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-svg-play-list',
  imports: [],
  templateUrl: './svg-play-list.component.html',
  styles: [
      `
      :host-context {
          display: contents;
      }
      `
    ]
})
export class SvgPlayListComponent {
  public width: InputSignal<string> = input<string>("100%");
  public height: InputSignal<string> = input<string>("100%");
  public color: InputSignal<string> = input<string>("white");
}
