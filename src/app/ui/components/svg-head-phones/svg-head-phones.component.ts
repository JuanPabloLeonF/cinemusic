import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-svg-head-phones',
  imports: [],
  templateUrl: './svg-head-phones.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgHeadPhonesComponent {

  public width: InputSignal<string> = input<string>("100%");
  public height: InputSignal<string> = input<string>("100%");
  public color: InputSignal<string> = input<string>("white");
}
