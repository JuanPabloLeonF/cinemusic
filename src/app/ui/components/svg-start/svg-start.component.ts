import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-svg-start',
  imports: [],
  templateUrl: './svg-start.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgStartComponent {
  public width: InputSignal<string> = input<string>("100%");
  public height: InputSignal<string> = input<string>("100%");
  public color: InputSignal<string> = input<string>("white");
}
