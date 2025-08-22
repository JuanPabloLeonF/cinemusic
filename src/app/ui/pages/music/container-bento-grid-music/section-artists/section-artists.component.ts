import { Component, inject } from '@angular/core';
import { ButtonGenericComponent } from "../../../../components/button-generic/button-generic.component";
import { SvgStartComponent } from "../../../../components/svg-start/svg-start.component";
import { StateMusicService } from '../../../../../domain/states/music/state-music.service';
import { Artis } from '../../../../../domain/models/music/artis';
import { NumberAbbrevPipe } from "../../../../../domain/pipes/number-abbrev.pipe";

@Component({
  selector: 'app-section-artists',
  imports: [ButtonGenericComponent, SvgStartComponent, NumberAbbrevPipe],
  templateUrl: './section-artists.component.html',
  styleUrl: './section-artists.component.css'
})
export class SectionArtistsComponent {
  private stateMusicService: StateMusicService = inject(StateMusicService);
  protected selectedArtist: Artis = this.stateMusicService.stateSectionArtistsService.getSelectedArtist();
}
