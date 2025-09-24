import { Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-svg-add-song-list',
  imports: [],
  templateUrl: './svg-add-song-list.component.html',
})
export class SvgAddSongListComponent {
  public width: InputSignal<string> = input<string>("2rem");
  public height: InputSignal<string> = input<string>("2rem");
  public color: InputSignal<string> = input<string>("white");
}
