import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { MusicService } from '../../services/music.service';
import { StatesMusicMobileService } from './state-music-mobile.service';
import { StateSectionNewsService } from './state-section-news.service';
import { StateSectionNewMusicService } from './state-section-new-music.service';
import { StateSectionOtherService } from './state-section-other.service';
import { StateSectionTrendsService } from './state-section-trends.service';
import { StateSectionPlayListService } from './state-section-play-list.service';
import { StateSectionArtistsService } from './state-section-artists.service';
import { StateSectionMainMusicService } from './state-section-main-music.service';
import { StateSectionSearchService } from './state-section-search.service';
import { StateMusicPlayerService } from './state-music-player.service';

@Injectable({
  providedIn: 'root'
})
export class StateMusicService {

  private musicService: MusicService = inject(MusicService);
  public stateSectionNewsService: StateSectionNewsService = inject(StateSectionNewsService);
  public stateSectionNewMusicService: StateSectionNewMusicService = inject(StateSectionNewMusicService);
  public stateSectionOtherService: StateSectionOtherService = inject(StateSectionOtherService);
  public stateSectionTrendsService: StateSectionTrendsService = inject(StateSectionTrendsService);
  public stateSectionPlayListService: StateSectionPlayListService = inject(StateSectionPlayListService);
  public stateSectionArtistsService: StateSectionArtistsService = inject(StateSectionArtistsService);
  public stateSectionMainMusicService: StateSectionMainMusicService = inject(StateSectionMainMusicService);
  public stateSectionSearchService: StateSectionSearchService = inject(StateSectionSearchService);
  public stateMusicPlayerService: StateMusicPlayerService = inject(StateMusicPlayerService);
  public stateMusicMobileService: StatesMusicMobileService = inject(StatesMusicMobileService);
  public activateMenuMobile: WritableSignal<boolean> = signal<boolean>(false);

  constructor() {
    this.musicService.getAll().subscribe((data) => {
      this.stateSectionMainMusicService.setListDataSongs(data);
    });

    this.musicService.getSongMostListened().subscribe((data) => {
      this.stateSectionNewsService.setSelectedSong(data);
    })

    this.musicService.getSongNew().subscribe((data) => {
      this.stateSectionNewMusicService.selectedSong.set(data);
    })

    this.musicService.getAllHistory().subscribe((data) => {
      this.stateSectionOtherService.setSelectedListSongs(data);
    })

    this.musicService.getGenderMostListened().subscribe((data) => {
      this.stateSectionTrendsService.setSelectedGender(data);
    })

    this.musicService.getDataPlayList().subscribe((data) => {
      this.stateSectionPlayListService.setDataPlayList(data);
    })

    this.musicService.getArtist().subscribe((data) => {
      this.stateSectionArtistsService.selectedArtist.set(data);
    })
  }
}