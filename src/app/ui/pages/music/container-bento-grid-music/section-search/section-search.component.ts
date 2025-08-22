import { Component, inject } from '@angular/core';
import { InputIconSearchComponent } from "../../../../components/input-icon-search/input-icon-search.component";
import { TypeSearch, TypeSearchEnum, TypeSvgSearch } from '../../../../../domain/models/music/category';
import { StateMusicService } from '../../../../../domain/states/music/state-music.service';
import { SvgStartComponent } from "../../../../components/svg-start/svg-start.component";
import { SvgSongsComponent } from "../../../../components/svg-songs/svg-songs.component";

@Component({
  selector: 'app-section-search',
  imports: [InputIconSearchComponent, SvgStartComponent, SvgSongsComponent],
  templateUrl: './section-search.component.html',
  styleUrl: './section-search.component.css'
})
export class SectionSearchComponent {

  private stateMusicService: StateMusicService = inject(StateMusicService);
  protected typeSearch: TypeSearch = {type: TypeSearchEnum.SEARCH, value: 'ALL'};

  protected onActivateSvg(value: TypeSvgSearch): void {
    console.log("data: " + value)
  }

  protected onChangeInput(value: TypeSearch): void {
    this.stateMusicService.stateSectionMainMusicService.changeFilteredSongs(value);
  }
}
