import { Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-button-generic',
  imports: [],
  templateUrl: './button-generic.component.html',
  styleUrl: './button-generic.component.css'
})
export class ButtonGenericComponent {
  public buttonText: InputSignal<String> = input<String>('Boton');
  public actionClick: InputSignal<Function> = input<Function>(() => {alert("click en el boton")});


  protected onClick(): void {
    this.actionClick()();
  }
}
