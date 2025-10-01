import { effect, inject, Injectable } from '@angular/core';
import { StateSectionNewsService } from './state-section-news.service';
import { StateSectionNewMusicService } from './state-section-new-music.service';
import { StateSectionOtherService } from './state-section-other.service';
import { StateSectionTrendsService } from './state-section-trends.service';
import { StateSectionPlayListService } from './state-section-play-list.service';
import { StateSectionArtistsService } from './state-section-artists.service';
import { StateSectionMainMusicService } from './state-section-main-music.service';
import { StateSectionSearchService } from './state-section-search.service';
import { StateMusicPlayerService } from './state-music-player.service';
import { MusicDataService } from '../../services/music/music-data-service.service';
import { StateFormularyCreateListService } from './state-formulary-create-list.service';
import { StateMyListSongsService } from './state-my-list-songs.service';
import { StateSectionAddSongToListService } from './state-section-add-song-to-list.service';

@Injectable({
  providedIn: 'root'
})
export class StateMusicService {
  private musicDataService: MusicDataService = inject(MusicDataService);

  public stateSectionNewsService: StateSectionNewsService = inject(StateSectionNewsService);
  public stateSectionNewMusicService: StateSectionNewMusicService = inject(StateSectionNewMusicService);
  public stateSectionOtherService: StateSectionOtherService = inject(StateSectionOtherService);
  public stateSectionTrendsService: StateSectionTrendsService = inject(StateSectionTrendsService);
  public stateSectionPlayListService: StateSectionPlayListService = inject(StateSectionPlayListService);
  public stateSectionArtistsService: StateSectionArtistsService = inject(StateSectionArtistsService);
  public stateSectionMainMusicService: StateSectionMainMusicService = inject(StateSectionMainMusicService);
  public stateSectionSearchService: StateSectionSearchService = inject(StateSectionSearchService);
  public stateMusicPlayerService: StateMusicPlayerService = inject(StateMusicPlayerService);
  public stateFormularyCreateListService: StateFormularyCreateListService = inject(StateFormularyCreateListService);
  public stateMyListSongsService: StateMyListSongsService = inject(StateMyListSongsService);
  public stateSectionAddSongToListService: StateSectionAddSongToListService = inject(StateSectionAddSongToListService);


  constructor() {

    effect(() => {
      this.stateSectionNewsService.selectedSong.set(this.musicDataService.songMostListened.signal());
    });

    effect(() => {
      this.stateSectionNewMusicService.selectedSong.set(this.musicDataService.newSong.signal());
    });

    effect(() => {
      this.stateSectionOtherService.selectedListSongs.set(this.musicDataService.songsHistory.signal());
    });

    effect(() => {
      this.stateSectionTrendsService.selectedGender.set(this.musicDataService.getGenderMostListened.signal());
    });

    effect(() => {
      this.stateSectionPlayListService.dataPlayList.set(this.musicDataService.getDataPlayList.signal());
    });

    effect(() => {
      this.stateSectionArtistsService.selectedArtist.set(this.musicDataService.getArtirstMostListened.signal());
    });

    effect(() => {
      this.stateSectionMainMusicService.setListDataSongs(this.musicDataService.allSongs.signal());
      this.stateSectionAddSongToListService.listAllSongs.set(this.musicDataService.allSongs.signal());
      this.stateSectionAddSongToListService.listAllSongsFiltered.set(this.musicDataService.allSongs.signal());
    });

    effect(() => {
      this.stateMyListSongsService.listsListSongs.set(this.musicDataService.getAllListSongs.signal());
    });
  }
}