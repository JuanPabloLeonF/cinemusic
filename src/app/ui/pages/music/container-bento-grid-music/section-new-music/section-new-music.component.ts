import { Component, inject } from '@angular/core';
import { ButtonGenericComponent } from "../../../../components/button-generic/button-generic.component";
import { SvgPlayComponent } from "../../../../components/svg-play/svg-play.component";
import { SvgHeartComponent } from "../../../../components/svg-heart/svg-heart.component";
import { Song } from '../../../../../domain/models/music/songs';
import { StateMusicService } from '../../../../../domain/states/music/state-music.service';

@Component({
  selector: 'app-section-new-music',
  imports: [SvgPlayComponent, SvgHeartComponent],
  templateUrl: './section-new-music.component.html',
  styleUrl: './section-new-music.component.css'
})
export class SectionNewMusicComponent {
  private stateMusicService: StateMusicService = inject(StateMusicService);
  protected selectedSong: Song = this.stateMusicService.stateSectionNewMusicService.getSelectedSong();
}
