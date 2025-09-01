import { Component, inject, WritableSignal } from '@angular/core';
import { SvgNoteComponent } from "../../../../components/svg-note/svg-note.component";
import { SvgTendencyComponent } from '../../../../components/svg-tendency/svg-tendency.component';
import { SvgHeadPhonesComponent } from '../../../../components/svg-head-phones/svg-head-phones.component';
import { StateMusicService } from '../../../../../domain/states/music/state-music.service';
import { Song } from '../../../../../domain/models/music/songs';

@Component({
  selector: 'app-section-news',
  imports: [SvgNoteComponent, SvgTendencyComponent, SvgHeadPhonesComponent],
  templateUrl: './section-news.component.html',
  styleUrl: './section-news.component.css'
})
export class SectionNewsComponent {
  private stateMusicService: StateMusicService = inject(StateMusicService);
  protected selectedSong: WritableSignal<Song> = this.stateMusicService.songMostListened;
}
