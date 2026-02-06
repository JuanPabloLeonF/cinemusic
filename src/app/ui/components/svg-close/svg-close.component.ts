import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-svg-close',
  imports: [],
  templateUrl: './svg-close.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgCloseComponent {
  public width: InputSignal<string> = input<string>("2rem");
  public height: InputSignal<string> = input<string>("2rem");
  public color: InputSignal<string> = input<string>("white");
}
