import { Component, inject, WritableSignal } from '@angular/core';
import { ButtonGenericComponent } from '../../../components/button-generic/button-generic.component';
import { InputFormGenericComponent } from '../../../components/input-form-generic/input-form-generic.component';
import { StateSectionMainMusicService } from '../../../../domain/states/music/state-section-main-music.service';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgClass } from '@angular/common';
import { StateMusicService } from '../../../../domain/states/music/state-music.service';

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

  private stateMusicService: StateMusicService = inject(StateMusicService);
  protected toogleFormulary: WritableSignal<boolean> = this.stateMusicService.toogleFormulary;
  private formularyBuilder: FormBuilder = inject(FormBuilder);

  protected listForms = this.formularyBuilder.group({
    name: ['', [Validators.required]],
    description: ['', [Validators.required]]
  });

  protected submitForm(): void {
    if (this.listForms.valid) {
      console.log('Formulario enviado:', this.listForms.value);
      this.toogleFormulary.set(false);
    } else {
      this.listForms.markAllAsTouched();
    }
  }

  protected cancel(): void {
    this.toogleFormulary.set(false);
  }
}
