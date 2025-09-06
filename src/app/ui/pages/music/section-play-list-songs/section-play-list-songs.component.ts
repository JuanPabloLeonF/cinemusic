import { Component, inject } from '@angular/core';
import { ButtonGenericComponent } from "../../../components/button-generic/button-generic.component";
import { ListSongs } from '../../../../domain/models/music/play-list';
import { SvgPlayComponent } from "../../../components/svg-play/svg-play.component";
import { SvgNoteComponent } from "../../../components/svg-note/svg-note.component";
import { SvgClockComponent } from "../../../components/svg-clock/svg-clock.component";
import { StateMusicService } from '../../../../domain/states/music/state-music.service';
import { SectionCardListsSongSelectedComponent } from "./section-card-lists-song-selected/section-card-lists-song-selected.component";
import { SvgStopComponent } from "../../../components/svg-stop/svg-stop.component";
import { SvgBackComponent } from "../../../components/svg-back/svg-back.component";

@Component({
  selector: 'app-section-play-list-songs',
  imports: [ButtonGenericComponent, SvgPlayComponent, SvgNoteComponent, SvgClockComponent, SectionCardListsSongSelectedComponent, SvgStopComponent, SvgBackComponent],
  templateUrl: './section-play-list-songs.component.html',
  styleUrl: './section-play-list-songs.component.css'
})
export class SectionPLayListSongsComponent {
  protected stateMusic: StateMusicService = inject(StateMusicService);
  protected listsListSongs: ListSongs[] = this.stateMusic.stateMyListSongsService.listsListSongs();

  protected getListSongs(listSongs: ListSongs): void {
    this.stateMusic.stateMyListSongsService.listSongsSelected.set(listSongs);
    this.stateMusic.stateMusicPlayerService.listSongs.set(listSongs.listSongs);
    this.stateMusic.stateMusicPlayerService.setSongSelected(listSongs.listSongs[0]);
    this.stateMusic.stateMyListSongsService.activateSection.set(true);
  }
}
