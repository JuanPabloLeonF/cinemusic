import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { StateMusicService } from '../../../../../domain/states/music/state-music.service';
import { SvgNoteComponent } from "../../../../components/svg-note/svg-note.component";
import { SvgClockComponent } from "../../../../components/svg-clock/svg-clock.component";
import { SvgPlayComponent } from "../../../../components/svg-play/svg-play.component";
import { SvgCloseComponent } from "../../../../components/svg-close/svg-close.component";
import { SvgHeartComponent } from "../../../../components/svg-heart/svg-heart.component";
import { Song } from '../../../../../domain/models/music/songs';
import { SvgTrashComponent } from "../../../../components/svg-trash/svg-trash.component";
import { TraslateVerticalDeletedDirective } from '../../../../animations/traslate/traslate-vertical-deleted.directive';
import { SvgStopComponent } from "../../../../components/svg-stop/svg-stop.component";
import { SvgAddSongListComponent } from "../../../../components/svg-add-song-list/svg-add-song-list.component";
import { AddSongToListComponent } from "../../add-song-to-list/add-song-to-list.component";
import { NgOptimizedImage, NgStyle } from '@angular/common';

@Component({
  selector: 'app-section-card-lists-song-selected',
  imports: [
    NgOptimizedImage,
    SvgNoteComponent,
    SvgClockComponent,
    SvgPlayComponent,
    SvgCloseComponent,
    SvgHeartComponent,
    SvgTrashComponent,
    TraslateVerticalDeletedDirective,
    SvgStopComponent,
    SvgAddSongListComponent,
    AddSongToListComponent,
    NgStyle
],
  templateUrl: './section-card-lists-song-selected.component.html',
  styleUrl: './section-card-lists-song-selected.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SectionCardListsSongSelectedComponent {
  protected stateMusic: StateMusicService = inject(StateMusicService);
  protected activationAnimation: string = "";

  protected getSongsPlay(song: Song): void {
    this.stateMusic.stateMusicPlayerService.setSongSelected(song);
  }

  protected deleteSong(song: Song, idList: string): void {
    this.stateMusic.stateMyListSongsService.deleteSongOfList(song, idList);
    this.activationAnimation = song.id;
  }
}