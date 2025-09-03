import { Component, inject, WritableSignal } from '@angular/core';
import { ButtonGenericComponent } from '../../../components/button-generic/button-generic.component';
import { InputFormGenericComponent } from '../../../components/input-form-generic/input-form-generic.component';
import { StateSectionMainMusicService } from '../../../../domain/states/music/state-section-main-music.service';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgClass } from '@angular/common';
import { StateMusicService } from '../../../../domain/states/music/state-music.service';
import { ListSongs } from '../../../../domain/models/music/play-list';

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
  protected toogleFormulary: WritableSignal<boolean> = this.stateMusicService.stateSectionPlayListService.toogleFormulary;
  private formularyBuilder: FormBuilder = inject(FormBuilder);

  protected listForms = this.formularyBuilder.group({
    name: ['', [Validators.required, Validators.pattern(/^(?!\s*$).+/)]],
    description: ['', [Validators.required, Validators.pattern(/^(?!\s*$).+/)]]
  });

  protected submitForm(): void {
    if (this.listForms.valid) {
      const data = {
        name: this.listForms.get('name')?.value,
        description: this.listForms.get('description')?.value,
      }
      this.stateMusicService.stateFormularyCreateListService.createNewListSongs(data);
      this.toogleFormulary.set(false);
    } else {
      this.listForms.markAllAsTouched();
    }
  }

  protected cancel(): void {
    this.toogleFormulary.set(false);
  }
}
