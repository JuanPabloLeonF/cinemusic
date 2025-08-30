import { Component, input, InputSignal, output, OutputEmitterRef } from '@angular/core';
import { TypeSearch, TypeSearchEnum } from '../../../domain/models/music/category';
import { SvgSearchComponent } from "../svg-search/svg-search.component";

@Component({
  selector: 'app-input-icon-search',
  imports: [SvgSearchComponent],
  templateUrl: './input-icon-search.component.html',
  styleUrl: './input-icon-search.component.css'
})
export class InputIconSearchComponent {
  public placeholder: InputSignal<string> = input<string>("placeholder");
  public widthInput: InputSignal<string> = input<string>("100%");
  public heightInput: InputSignal<string> = input<string>("2rem");
  public onChangeInputData: OutputEmitterRef<string> = output<string>();

  protected onChangeInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.onChangeInputData.emit(target.value);
  }
}
