import { Component } from '@angular/core';
import { ButtonGenericComponent } from '../../../components/button-generic/button-generic.component';
import { InputSearchGenericComponent } from '../../../components/input-search-generic/input-search-generic.component';

@Component({
  selector: 'app-formulary-create-list-music',
  imports: [ButtonGenericComponent, InputSearchGenericComponent],
  templateUrl: './formulary-create-list-music.component.html',
  styleUrl: './formulary-create-list-music.component.css'
})
export class FormularyCreateListMusicComponent {

  protected createList(): void {
    alert("creando lista")
  }
}
