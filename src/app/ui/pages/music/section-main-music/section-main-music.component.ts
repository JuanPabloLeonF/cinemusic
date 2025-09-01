import { Component, inject, OnInit, WritableSignal } from '@angular/core';
import { Song } from '../../../../domain/models/music/songs';
import { NgClass } from '@angular/common';
import { WobbleDirective } from '../../../animations/wobble/wobble.directive';
import { StateMusicService } from '../../../../domain/states/music/state-music.service';
import { ScrollRevealDirective } from '../../../animations/scroll/scrolls-items.directive';

@Component({
  selector: 'app-section-main-music',
  imports: [
    NgClass,
    WobbleDirective,
    ScrollRevealDirective
  ],
  templateUrl: './section-main-music.component.html',
  styleUrl: './section-main-music.component.css'
})
export class SectionMainMusicComponent implements OnInit {

  private stateMusicService: StateMusicService = inject(StateMusicService);
  protected listdataMusic: WritableSignal<Song[]> = this.stateMusicService.listSongsFiltered;

  ngOnInit(): void {
    if (this.listdataMusic().length > 0) {
      this.stateMusicService.listSongs.set(this.listdataMusic())
      this.listdataMusic()[0].isPlaying = true;
      this.stateMusicService.setSongSelected(this.listdataMusic()[0]);
    }
  }

  protected getSong(song: Song): void {
    this.stateMusicService.setSongSelected(song);
  }
}
