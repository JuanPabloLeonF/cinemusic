import { ChangeDetectionStrategy, Component, input, InputSignal, OnInit, output, OutputEmitterRef, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-select-options',
  imports: [],
  templateUrl: './select-options.component.html',
  styleUrl: './select-options.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectOptionsComponent implements OnInit {

  public inputWidth: InputSignal<string> = input<string>("");
  public inputHeight: InputSignal<string> = input<string>("");
  public inputBorder: InputSignal<string> = input<string>("");
  public inputColor: InputSignal<string> = input<string>("");
  public inputBgColor: InputSignal<string> = input<string>("");
  public textInitial: InputSignal<string> = input<string>("Texto inicial"); 
  public inputSelectedOption: InputSignal<string> = input<string>("");
  public inputBorderFocus: InputSignal<string> = input<string>("");
  public inputListOptions: InputSignal<string[]> = input<string[]>([]);
  public ouputOptionSelected: OutputEmitterRef<string> = output<string>();

  ngOnInit(): void {
    this.selected.set(this.inputSelectedOption());
  }

  protected open: WritableSignal<boolean>  = signal(false);
  protected selected: WritableSignal<string | null> = signal<string | null>(null);

  protected toggle() {
    this.open.set(!this.open());
  }

  protected select(value: string) {
    this.selected.set(value);
    this.toggle();
    this.ouputOptionSelected.emit(value);
  }

}
