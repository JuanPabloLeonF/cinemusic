import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-svg-stop',
  imports: [],
  templateUrl: './svg-stop.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgStopComponent {
  public width: InputSignal<string> = input<string>("2rem");
  public height: InputSignal<string> = input<string>("2rem");
  public color: InputSignal<string> = input<string>("white");
}
