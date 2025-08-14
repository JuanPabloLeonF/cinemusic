import { Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-svg-note',
  imports: [],
  templateUrl: './svg-note.component.html',
})
export class SvgNoteComponent {
  public width: InputSignal<string> = input<string>("2rem");
  public height: InputSignal<string> = input<string>("2rem");
  public color: InputSignal<string> = input<string>("white");
}
