import { Component, inject, WritableSignal } from '@angular/core';
import { InputIconSearchComponent } from "../../../../components/input-icon-search/input-icon-search.component";
import { TypeSearch } from '../../../../../domain/models/music/category';
import { StateMusicService } from '../../../../../domain/states/music/state-music.service';
import { SvgSongsComponent } from "../../../../components/svg-songs/svg-songs.component";
import { SvgSingerComponent } from "../../../../components/svg-singer/svg-singer.component";
import { SvgGenderComponent } from "../../../../components/svg-gender/svg-gender.component";
import { Song } from '../../../../../domain/models/music/songs';

@Component({
  selector: 'app-section-search',
  imports: [InputIconSearchComponent, SvgSongsComponent, SvgSingerComponent, SvgGenderComponent],
  templateUrl: './section-search.component.html',
  styleUrl: './section-search.component.css'
})
export class SectionSearchComponent {

  private stateMusicService: StateMusicService = inject(StateMusicService);
  protected dataSearch: WritableSignal<TypeSearch> = this.stateMusicService.stateSectionSearchService.dataSearch;

  protected onChangeInput(value: string): void {
    this.dataSearch.set({
      type: this.dataSearch().type,
      value: value
    })

    let listDataFiltered: Song[] = this.stateMusicService.stateSectionMainMusicService.changeFilteredSongs(this.dataSearch());

    if (listDataFiltered.length > 0) {
      this.stateMusicService.stateMusicPlayerService.listSongs.set(listDataFiltered);
    }
  }
}
