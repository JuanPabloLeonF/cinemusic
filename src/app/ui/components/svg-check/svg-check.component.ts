import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-svg-check',
  imports: [],
  templateUrl: './svg-check.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgCheckComponent {
  public width: InputSignal<string> = input<string>("2rem");
  public height: InputSignal<string> = input<string>("2rem");
  public color: InputSignal<string> = input<string>("white");
}
