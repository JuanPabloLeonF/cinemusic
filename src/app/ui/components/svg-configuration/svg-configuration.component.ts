import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-svg-configuration',
  imports: [],
  templateUrl: './svg-configuration.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
      `
      :host-context {
          display: contents;
      }
      `
    ]
})
export class SvgConfigurationComponent {
  public width: InputSignal<string> = input<string>("100%");
  public height: InputSignal<string> = input<string>("100%");
  public color: InputSignal<string> = input<string>("white");
}
