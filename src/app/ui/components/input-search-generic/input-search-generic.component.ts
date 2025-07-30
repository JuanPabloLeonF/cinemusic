import { Component, input, InputSignal, output, OutputEmitterRef } from '@angular/core';
import { TypeSearch, TypeSearchEnum } from '../../../domain/models/music/category';

@Component({
  selector: 'app-input-search-generic',
  imports: [],
  templateUrl: './input-search-generic.component.html',
  styleUrl: './input-search-generic.component.css'
})
export class InputSearchGenericComponent {

  public placeholder: InputSignal<string> = input<string>("placeholder");
  public onChangeInputData: OutputEmitterRef<TypeSearch> = output<TypeSearch>();

  protected onChangeInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.onChangeInputData.emit({type: TypeSearchEnum.SEARCH, value: target.value.toUpperCase()});
  }

}
