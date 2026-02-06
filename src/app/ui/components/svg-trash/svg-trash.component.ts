import { ChangeDetectionStrategy, Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-svg-trash',
  imports: [],
  templateUrl: './svg-trash.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgTrashComponent {
  public width: InputSignal<string> = input<string>("2rem");
  public height: InputSignal<string> = input<string>("2rem");
  public color: InputSignal<string> = input<string>("white");
}
