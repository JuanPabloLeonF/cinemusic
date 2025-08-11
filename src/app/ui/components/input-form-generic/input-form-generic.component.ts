import { Component, input, InputSignal, output, OutputEmitterRef, forwardRef, signal } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputFormGenericComponent),
  multi: true
};

@Component({
  selector: 'app-input-form-generic',
  standalone: true,
  imports: [FormsModule, NgClass],
  template: `
    <input 
      class="input-search" 
      [ngClass]="{ 'input-error': hasError() }"
      type="text" 
      [placeholder]="placeholder()" 
      [style.width]="widthInput()"
      [style.height]="heightInput()"
      [(ngModel)]="value"
      (input)="onInput($event)"
      (blur)="onTouched()"
    >
  `,
  styleUrl: './input-form-generic.component.css',
  providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class InputFormGenericComponent implements ControlValueAccessor {

  public placeholder: InputSignal<string> = input<string>("placeholder");
  public widthInput: InputSignal<string> = input<string>("100%");
  public heightInput: InputSignal<string> = input<string>("2rem");
  public hasError: InputSignal<boolean | undefined> = input<boolean | undefined>(false);

  public value: string = '';
  
  public onChange: (value: any) => void = () => {};
  public onTouched: () => void = () => {};

  writeValue(value: any): void {
    this.value = value;
  }
  registerOnChange(fn: (value: any) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  protected onInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.onChange(target.value);
  }
}