import { effect, inject, Injectable, Signal, signal, WritableSignal } from '@angular/core';
import { StateSectionNewsService } from './state-section-news.service';
import { StateSectionNewMusicService } from './state-section-new-music.service';
import { StateSectionOtherService } from './state-section-other.service';
import { StateSectionTrendsService } from './state-section-trends.service';
import { StateSectionPlayListService } from './state-section-play-list.service';
import { StateSectionArtistsService } from './state-section-artists.service';
import { StateSectionMainMusicService } from './state-section-main-music.service';
import { StateSectionSearchService } from './state-section-search.service';
import { StateMusicPlayerService } from './state-music-player.service';
import { Song, TypePlayEnum } from '../../models/music/songs';
import { MusicDataService } from '../../services/music/music-data-service.service';
import { Gender } from '../../models/music/gender';
import { ListSongs, PlayList } from '../../models/music/play-list';
import { Artis } from '../../models/music/artis';
import { TypeSearch } from '../../models/music/category';
import { StateFormularyCreateListService } from './state-formulary-create-list.service';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateMusicService {
  private musicDataService: MusicDataService = inject(MusicDataService);

  private stateSectionNewsService: StateSectionNewsService = inject(StateSectionNewsService);
  private stateSectionNewMusicService: StateSectionNewMusicService = inject(StateSectionNewMusicService);
  private stateSectionOtherService: StateSectionOtherService = inject(StateSectionOtherService);
  private stateSectionTrendsService: StateSectionTrendsService = inject(StateSectionTrendsService);
  private stateSectionPlayListService: StateSectionPlayListService = inject(StateSectionPlayListService);
  private stateSectionArtistsService: StateSectionArtistsService = inject(StateSectionArtistsService);
  private stateSectionMainMusicService: StateSectionMainMusicService = inject(StateSectionMainMusicService);
  private stateSectionSearchService: StateSectionSearchService = inject(StateSectionSearchService);
  private stateMusicPlayerService: StateMusicPlayerService = inject(StateMusicPlayerService);
  private stateFormularyCreateListService: StateFormularyCreateListService = inject(StateFormularyCreateListService);
  public activateMenuMobile: WritableSignal<boolean> = signal<boolean>(false);


  constructor() {

    effect(() => {
      this.stateFormularyCreateListService.listsDataOfSongs.set(this.musicDataService.getAllListSongs());
    });

    effect(() => {
      this.stateSectionNewsService.selectedSong.set(this.musicDataService.songMostListened());
    });

    effect(() => {
      this.stateSectionNewMusicService.selectedSong.set(this.musicDataService.newSong());
    });

    effect(() => {
      this.stateSectionOtherService.selectedListSongs.set(this.musicDataService.songsHistory());
    });

    effect(() => {
      this.stateSectionTrendsService.selectedGender.set(this.musicDataService.getGenderMostListened());
    });

    effect(() => {
      this.stateSectionPlayListService.dataPlayList.set(this.musicDataService.getDataPlayList());
    });

    effect(() => {
      this.stateSectionArtistsService.selectedArtist.set(this.musicDataService.getArtirstMostListened());
    });

    effect(() => {
      this.stateSectionMainMusicService.setListDataSongs(this.musicDataService.allSongs());
    });
  }

  public songMostListened: WritableSignal<Song> = this.stateSectionNewsService.selectedSong;
  public newSong: WritableSignal<Song> = this.stateSectionNewMusicService.selectedSong;
  public songsHistory: WritableSignal<Song[]> = this.stateSectionOtherService.selectedListSongs;
  public genderMostListened: WritableSignal<Gender> = this.stateSectionTrendsService.selectedGender;
  public dataPlayList: WritableSignal<PlayList> = this.stateSectionPlayListService.dataPlayList;
  public toogleFormulary: WritableSignal<boolean> = this.stateSectionPlayListService.toogleFormulary;
  public toogleAddSong: WritableSignal<boolean> = this.stateSectionPlayListService.toogleAddSong;
  public artistMostListened: WritableSignal<Artis> = this.stateSectionArtistsService.selectedArtist;
  public listSongsFiltered: WritableSignal<Song[]> = this.stateSectionMainMusicService.listSongsFiltered;
  public dataSearch: WritableSignal<TypeSearch> = this.stateSectionSearchService.dataSearch;
  public activationSong: WritableSignal<boolean> = this.stateSectionSearchService.activationSong;
  public activationGender: WritableSignal<boolean> = this.stateSectionSearchService.activationGender;
  public activationSinger: WritableSignal<boolean> = this.stateSectionSearchService.activationSinger;
  public selectedSong: WritableSignal<Song> = this.stateMusicPlayerService.selectedSong;
  public listSongs: WritableSignal<Song[]> = this.stateMusicPlayerService.listSongs;
  public currentTypePlay: WritableSignal<TypePlayEnum> = this.stateMusicPlayerService.currentTypePlay;
  public listsDataOfSongs: WritableSignal<ListSongs[]> = this.stateFormularyCreateListService.listsDataOfSongs;
  public activateMenu: WritableSignal<boolean> = signal<boolean>(false);

  public changeFilteredSongs(filter: TypeSearch): Song[] {
    return this.stateSectionMainMusicService.changeFilteredSongs(filter);
  }

  public setStateElements(data: string): void {
    this.stateSectionSearchService.setStateElements(data);
  }

  public playAudio(): void {
    this.stateMusicPlayerService.playAudio();
  }

  public setSongSelected(song: Song): void {
    this.stateMusicPlayerService.setSongSelected(song);
  }

  public changeSongNext(): void {
    this.stateMusicPlayerService.changeSongNext();
  }

  public changeSongBack(): void {
    this.stateMusicPlayerService.changeSongBack();
  }

  public stopAudio(): void {
    this.stateMusicPlayerService.stopAudio();
  }

  public changeFavoriteSong(): void {
    this.stateMusicPlayerService.changeFavoriteSong();
  }

  public setupMediaSessionHandlers(playAudio: Function, stopAudio: Function, changeSongNext: Function, changeSongBack: Function ): void {
    this.stateMusicPlayerService.setupMediaSessionHandlers(playAudio, stopAudio, changeSongNext, changeSongBack);
  }

   public createNewListSongs(listSongs: any): void {
    this.musicDataService.createNewListSongs(listSongs).subscribe({
      next: () => {
        this.toogleFormulary.set(false);
        this.stateFormularyCreateListService.listsDataOfSongs.set(this.musicDataService.getAllListSongs());
        console.log("data vuelta a traer: ", this.listsDataOfSongs());
      },
      error: (error) => {
        alert("Error al crear una lista de cancione nueva")
      }
    })
  }

}