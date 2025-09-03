import { Component, inject } from '@angular/core';
import { SvgPlayComponent } from "../../../../components/svg-play/svg-play.component";
import { ScrollsCarouselDirective } from '../../../../animations/scroll/scrolls-carousel.directive';
import { StateMusicService } from '../../../../../domain/states/music/state-music.service';
import { Song } from '../../../../../domain/models/music/songs';

@Component({
  selector: 'app-section-other',
  imports: [SvgPlayComponent, ScrollsCarouselDirective],
  templateUrl: './section-other.component.html',
  styleUrl: './section-other.component.css'
})
export class SectionOtherComponent {
  private stateMusicService: StateMusicService = inject(StateMusicService);
  protected listSongs: Song[] = this.stateMusicService.stateSectionOtherService.selectedListSongs();

  protected onClickPlay(song: Song): void {
    this.stateMusicService.stateMusicPlayerService.setSongSelected(song);
  }
}
