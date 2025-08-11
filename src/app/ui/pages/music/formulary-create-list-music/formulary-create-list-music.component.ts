import { Component, inject } from '@angular/core';
import { ButtonGenericComponent } from '../../../components/button-generic/button-generic.component';
import { InputFormGenericComponent } from '../../../components/input-form-generic/input-form-generic.component';
import { StateSectionMainMusicService } from '../../../../domain/states/state-section-main-music.service';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-formulary-create-list-music',
  imports: [
    ButtonGenericComponent, 
    InputFormGenericComponent, 
    FormsModule, 
    ReactiveFormsModule,
    NgClass
  ],
  templateUrl: './formulary-create-list-music.component.html',
  styleUrl: './formulary-create-list-music.component.css'
})
export class FormularyCreateListMusicComponent {

  protected stateSectionMainMusicService: StateSectionMainMusicService = inject(StateSectionMainMusicService);
  private formularyBuilder: FormBuilder = inject(FormBuilder);

  protected listForms = this.formularyBuilder.group({
    name: ['', [Validators.required]],
    description: ['', [Validators.required]]
  });

  protected submitForm(): void {
    if (this.listForms.valid) {
      console.log('Formulario enviado:', this.listForms.value);
      this.stateSectionMainMusicService.showToggleFormularyCreatedListMusic.set(false);
    } else {
      this.listForms.markAllAsTouched();
    }
  }

  protected cancel(): void {
    this.stateSectionMainMusicService.showToggleFormularyCreatedListMusic.set(false);
  }
}
