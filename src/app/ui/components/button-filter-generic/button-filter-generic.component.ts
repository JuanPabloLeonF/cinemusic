import { Component, input, InputSignal, output, OutputEmitterRef } from '@angular/core';
import { TypeSearch, TypeSearchEnum } from '../../../domain/models/music/category';

@Component({
  selector: 'app-button-filter-generic',
  imports: [],
  templateUrl: './button-filter-generic.component.html',
  styleUrl: './button-filter-generic.component.css'
})
export class ButtonFilterGenericComponent {

  public buttonText: InputSignal<String> = input<String>("Filtrar");
  public actionClick: OutputEmitterRef<TypeSearch> = output<TypeSearch>();

  protected onClick(): void {
    this.actionClick.emit({type: TypeSearchEnum.CATEGORY, value: this.buttonText()});
  }
}
