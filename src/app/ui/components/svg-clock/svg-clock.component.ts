import { Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-svg-clock',
  imports: [],
  templateUrl: './svg-clock.component.html',
})
export class SvgClockComponent {
  public width: InputSignal<string> = input<string>("2rem");
  public height: InputSignal<string> = input<string>("2rem");
  public color: InputSignal<string> = input<string>("white");
}
