import { ChangeDetectionStrategy, Component, inject, OnInit, WritableSignal } from '@angular/core';
import { Song } from '../../../../domain/models/music/songs';
import { NgClass, NgOptimizedImage } from '@angular/common';
import { WobbleDirective } from '../../../animations/wobble/wobble.directive';
import { StateMusicService } from '../../../../domain/states/music/state-music.service';
import { ScrollRevealDirective } from '../../../animations/scroll/scrolls-items.directive';

@Component({
  selector: 'app-section-main-music',
  imports: [
    NgOptimizedImage,
    NgClass,
    WobbleDirective,
    ScrollRevealDirective
  ],
  templateUrl: './section-main-music.component.html',
  styleUrl: './section-main-music.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SectionMainMusicComponent implements OnInit {

  private stateMusicService: StateMusicService = inject(StateMusicService);
  protected listdataMusic: WritableSignal<Song[]> = this.stateMusicService.stateSectionMainMusicService.listSongsFiltered;

  ngOnInit(): void {
    if (this.listdataMusic().length > 0) {
      this.stateMusicService.stateMusicPlayerService.listSongs.set(this.listdataMusic())
      this.listdataMusic()[0].isPlaying = true;
      this.stateMusicService.stateMusicPlayerService.setSongSelected(this.listdataMusic()[0]);
    }
  }

  protected getSong(song: Song): void {
    this.stateMusicService.stateMusicPlayerService.setSongSelected(song);
  }
}
