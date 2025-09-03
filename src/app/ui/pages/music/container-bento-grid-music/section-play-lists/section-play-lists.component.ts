import { Component, inject, WritableSignal } from '@angular/core';
import { SvgPlayListComponent } from "../../../../components/svg-play-list/svg-play-list.component";
import { SvgHeartComponent } from "../../../../components/svg-heart/svg-heart.component";
import { SvgNoteComponent } from "../../../../components/svg-note/svg-note.component";
import { StateMusicService } from '../../../../../domain/states/music/state-music.service';
import { PlayList } from '../../../../../domain/models/music/play-list';

@Component({
  selector: 'app-section-play-lists',
  imports: [SvgPlayListComponent, SvgHeartComponent, SvgNoteComponent],
  templateUrl: './section-play-lists.component.html',
  styleUrl: './section-play-lists.component.css'
})
export class SectionPlayListsComponent {
  private stateMusicService: StateMusicService = inject(StateMusicService);
  protected dataPlayList: PlayList = this.stateMusicService.stateSectionPlayListService.dataPlayList();
  protected toogleFormulary: WritableSignal<boolean> = this.stateMusicService.stateSectionPlayListService.toogleFormulary;
  protected toogleAddSong: WritableSignal<boolean> = this.stateMusicService.stateSectionPlayListService.toogleAddSong;
}
