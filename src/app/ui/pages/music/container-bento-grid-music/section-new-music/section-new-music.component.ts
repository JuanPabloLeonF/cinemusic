import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SvgPlayComponent } from "../../../../components/svg-play/svg-play.component";
import { SvgHeartComponent } from "../../../../components/svg-heart/svg-heart.component";
import { Song } from '../../../../../domain/models/music/songs';
import { StateMusicService } from '../../../../../domain/states/music/state-music.service';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-section-new-music',
  imports: [NgOptimizedImage, SvgPlayComponent, SvgHeartComponent],
  templateUrl: './section-new-music.component.html',
  styleUrl: './section-new-music.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SectionNewMusicComponent {
  private stateMusicService: StateMusicService = inject(StateMusicService);
  protected selectedSong: Song = this.stateMusicService.stateSectionNewMusicService.selectedSong();

  protected onClickPlay(): void {
    this.stateMusicService.stateMusicPlayerService.selectedSong.set(this.selectedSong);
  }

  protected onClickFavorite(): void {
    this.stateMusicService.stateMusicPlayerService.changeFavoriteSong();
  }
}
