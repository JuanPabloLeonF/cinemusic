import { Component, inject } from '@angular/core';
import { SectionMainMusicComponent } from './section-main-music/section-main-music.component';
import { ButtonGenericComponent } from "../../components/button-generic/button-generic.component";
import { FormularyCreateListMusicComponent } from './formulary-create-list-music/formulary-create-list-music.component';
import { StateSectionMainMusicService } from '../../../domain/states/state-section-main-music.service';

@Component({
  imports: [
    SectionMainMusicComponent,
    ButtonGenericComponent,
    FormularyCreateListMusicComponent
  ],
  templateUrl: './music.component.html',
  styleUrl: './music.component.css'
})
export class MusicComponent {

  protected stateSectionMainMusicService: StateSectionMainMusicService = inject(StateSectionMainMusicService);
}
