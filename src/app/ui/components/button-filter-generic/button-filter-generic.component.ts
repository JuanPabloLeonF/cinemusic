import { Component, input, InputSignal, output, OutputEmitterRef } from '@angular/core';

@Component({
  selector: 'app-button-filter-generic',
  imports: [],
  templateUrl: './button-filter-generic.component.html',
  styleUrl: './button-filter-generic.component.css'
})
export class ButtonFilterGenericComponent {

  public buttonText: InputSignal<String> = input<String>("Filtrar");
  public actionClick: OutputEmitterRef<String> = output<String>();

  protected onClick(): void {
    this.actionClick.emit(this.buttonText());
  }
}
