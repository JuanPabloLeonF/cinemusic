import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-svg-screen-max',
  imports: [],
  templateUrl: './svg-screen-max.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
      `
      :host-context {
          display: contents;
      }
      `
    ]
})
export class SvgScreenMaxComponent {
  public width: InputSignal<string> = input<string>("100%");
  public height: InputSignal<string> = input<string>("100%");
  public color: InputSignal<string> = input<string>("white");
}
