import { Component, input, InputSignal, output, OutputEmitterRef } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TraslateDirective } from '../../animations/traslate/traslate.directive';

@Component({
  selector: 'app-nav-bar-main',
  imports: [RouterModule, TraslateDirective],
  templateUrl: './nav-bar-main.component.html',
  styleUrl: './nav-bar-main.component.css'
})
export class NavBarMainComponent {

  public activateMenu: InputSignal<boolean> = input<boolean>(true);
  public switchMenuOutput: OutputEmitterRef<boolean> = output<boolean>();

  protected switchMenu(): void {
    this.switchMenuOutput.emit(false);
  }

 }
