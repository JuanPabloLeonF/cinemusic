import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { InputIconSearchComponent } from "../../../components/input-icon-search/input-icon-search.component";
import { SvgAddSongListComponent } from "../../../components/svg-add-song-list/svg-add-song-list.component";
import { SvgCloseComponent } from "../../../components/svg-close/svg-close.component";
import { StateMusicService } from '../../../../domain/states/music/state-music.service';
import { SvgCheckComponent } from "../../../components/svg-check/svg-check.component";
import { ScrollRevealDirective } from '../../../animations/scroll/scrolls-items.directive';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-add-song-to-list',
  imports: [
    NgOptimizedImage,
    InputIconSearchComponent, 
    SvgAddSongListComponent, 
    SvgCloseComponent, 
    SvgCheckComponent,
    ScrollRevealDirective
],
  templateUrl: './add-song-to-list.component.html',
  styleUrl: './add-song-to-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddSongToListComponent {
  protected stateMusicService: StateMusicService = inject(StateMusicService); 

  protected onChangeInput(value: string): void {
    this.stateMusicService.stateSectionAddSongToListService.filteredSongsByName(value);
  }
}
