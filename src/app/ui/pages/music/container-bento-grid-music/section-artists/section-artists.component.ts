import { Component, inject } from '@angular/core';
import { ButtonGenericComponent } from "../../../../components/button-generic/button-generic.component";
import { SvgStartComponent } from "../../../../components/svg-start/svg-start.component";
import { StateMusicService } from '../../../../../domain/states/music/state-music.service';
import { Artis } from '../../../../../domain/models/music/artis';
import { NumberAbbrevPipe } from "../../../../../domain/pipes/number-abbrev.pipe";
import { TypeSearch, TypeSearchEnum } from '../../../../../domain/models/music/category';
import { Song } from '../../../../../domain/models/music/songs';

@Component({
  selector: 'app-section-artists',
  imports: [ButtonGenericComponent, SvgStartComponent, NumberAbbrevPipe],
  templateUrl: './section-artists.component.html',
  styleUrl: './section-artists.component.css'
})
export class SectionArtistsComponent {
  private stateMusicService: StateMusicService = inject(StateMusicService);
  protected selectedArtist: Artis = this.stateMusicService.stateSectionArtistsService.selectedArtist();

  protected onClickPlay(): void {
      const filter: TypeSearch = {
        type: TypeSearchEnum.ARTIST,
        value: this.selectedArtist.name
      }
  
      let listData: Song[] = this.stateMusicService.stateSectionMainMusicService.changeFilteredSongs(filter);
  
      if (listData.length > 0) {
        this.stateMusicService.stateMusicPlayerService.listSongs.set(listData);
        this.stateMusicService.stateMusicPlayerService.setSongSelected(listData[0]);
      }

    }
}
