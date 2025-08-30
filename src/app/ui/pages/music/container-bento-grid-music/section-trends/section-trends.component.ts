import { Component, inject } from '@angular/core';
import { SvgPlayComponent } from "../../../../components/svg-play/svg-play.component";
import { StateMusicService } from '../../../../../domain/states/music/state-music.service';
import { Gender } from '../../../../../domain/models/music/gender';
import { NumberAbbrevPipe } from '../../../../../domain/pipes/number-abbrev.pipe';
import { Song } from '../../../../../domain/models/music/songs';
import { TypeSearch, TypeSearchEnum } from '../../../../../domain/models/music/category';

@Component({
  selector: 'app-section-trends',
  imports: [SvgPlayComponent, NumberAbbrevPipe],
  templateUrl: './section-trends.component.html',
  styleUrl: './section-trends.component.css'
})
export class SectionTrendsComponent {
  private stateMusicService: StateMusicService = inject(StateMusicService);
  protected selectedGender: Gender = this.stateMusicService.stateSectionTrendsService.getSelectedGender();

  protected onClickPlay(): void {
    const filter: TypeSearch = {
      type: TypeSearchEnum.CATEGORY,
      value: this.selectedGender.name
    }

    let listData: Song[] = this.stateMusicService.stateSectionMainMusicService.changeFilteredSongs(filter);

    if (listData.length > 0) {
      this.stateMusicService.stateMusicPlayerService.listSongs.set(listData);
    }
  }
}
