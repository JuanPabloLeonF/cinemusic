import { ChangeDetectionStrategy, Component, input, InputSignal, output, OutputEmitterRef } from '@angular/core';

@Component({
  selector: 'app-button-generic',
  imports: [],
  templateUrl: './button-generic.component.html',
  styleUrl: './button-generic.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonGenericComponent {
  public width: InputSignal<String> = input<String>('100%');
  public height: InputSignal<String> = input<String>('100%');
  public buttonText: InputSignal<String> = input<String>('Boton');
  public typeButton: InputSignal<String> = input<String>('button');
  public actionClick: OutputEmitterRef<void> = output<void>();

  public onClick(): void {
    this.actionClick.emit();
  }
}
