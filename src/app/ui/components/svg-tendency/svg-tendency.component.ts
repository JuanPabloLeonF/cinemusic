import { Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-svg-tendency',
  imports: [],
  templateUrl: './svg-tendency.component.html',
})
export class SvgTendencyComponent {

  public width: InputSignal<string> = input<string>("100%");
  public height: InputSignal<string> = input<string>("100%");
  public color: InputSignal<string> = input<string>("white");
}
