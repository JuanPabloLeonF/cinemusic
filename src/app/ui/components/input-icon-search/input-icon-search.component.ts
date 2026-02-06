import { ChangeDetectionStrategy, Component, ElementRef, input, InputSignal, output, OutputEmitterRef, ViewChild } from '@angular/core';
import { SvgSearchComponent } from "../svg-search/svg-search.component";

@Component({
  selector: 'app-input-icon-search',
  imports: [SvgSearchComponent],
  templateUrl: './input-icon-search.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
      :host-context {
          display: contents;
      }

      .container-input-icon {
          display: flex;
          align-items: center;
          position: relative;
          padding: 0.5rem;
      }

      .input-search {
          width: 100%;
          height: 100%; 
          border-radius: 0.5rem;
          outline: none;
          padding: 0 0.7rem;
          transition: border 0.3s ease-out;
          position: absolute;
          top: 0;
          left: 0;
          padding-left: 3.5rem;
          border: 1px solid transparent;
      }

      .input-search::placeholder {
        color: var(--color-gray-white);
      }
    `
  ]
})
export class InputIconSearchComponent {

  @ViewChild('inputSearchIcon') inputSearchIcon!: ElementRef<HTMLInputElement>;
  public placeholder: InputSignal<string> = input<string>("placeholder");
  public widthInput: InputSignal<string> = input<string>("100%");
  public heightInput: InputSignal<string> = input<string>("2rem");
  public onChangeInputData: OutputEmitterRef<string> = output<string>();
  public bgColor: InputSignal<string> = input<string>("var(--bg-selected-menu-music)");
  public colorText: InputSignal<string> = input<string>("white");
  public colorBorder: InputSignal<string> = input<string>("white");
  public colorFocus: InputSignal<string> = input<string>("white");
  public colorIcon: InputSignal<string> = input<string>("white");
  public colorIconHover: InputSignal<string> = input<string>("white");

  protected onChangeInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.onChangeInputData.emit(target.value);
  }

  protected onFocus() {
    const inputComponent: HTMLInputElement = this.inputSearchIcon.nativeElement;
    inputComponent.style.borderColor = this.colorFocus();
  }

  protected onBlur() {
    const inputComponent: HTMLInputElement = this.inputSearchIcon.nativeElement;
    inputComponent.style.borderColor = this.colorBorder();
  }
}
