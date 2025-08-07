import { ElementRef, inject, Injectable, signal, WritableSignal } from '@angular/core';
import { MusicService } from '../services/music.service';
import { Song, TypePlayEnum } from '../models/music/songs';
import { DevicesConfigurationServiceService } from '../services/devices-configuration-service.service';
import { StatesMusicMobileService } from './state-music-mobile.service';

@Injectable({
  providedIn: 'root'
})
export class StateMusicService {

  private devicesConfigService: DevicesConfigurationServiceService = inject(DevicesConfigurationServiceService);
  public stateMusicMobileService: StatesMusicMobileService = inject(StatesMusicMobileService);
  private musicService: MusicService = inject(MusicService);
  public listSongs: WritableSignal<Song[]> = signal<Song[]>([]);
  public songSelected: WritableSignal<Song> = signal<Song>({} as Song);
  private currentTypePlay: WritableSignal<TypePlayEnum> = signal<TypePlayEnum>(TypePlayEnum.SHUFFLE);
  public activateMenuMobile: WritableSignal<boolean> = signal<boolean>(false);

  constructor() {
    this.musicService.getAll().subscribe((data) => {
      this.listSongs.set(data);
      this.songSelected.set(data[0]);
    });
    this.updateMediaSessionMetadata();
  }

  public setSongSelected(song: Song): void {
    this.songSelected().isPlaying = false;
    this.songSelected.set(song);
    this.songSelected().isPlaying = true;
    this.updateMediaSessionMetadata();
  }

  public setTypePlay(type: TypePlayEnum): void {
    this.currentTypePlay.set(type);
  }

  public changeSongNext(): void {
    const typePlay = this.currentTypePlay();
    const currentIndex = this.listSongs().indexOf(this.songSelected());
    let nextIndex = 0;
    const currentSong = this.songSelected();

    if (currentSong) {
      currentSong.isPlaying = false;
    }
  
    switch (typePlay) {
      case TypePlayEnum.SHUFFLE:
        let randomIndex = 0;
        do {
          randomIndex = Math.floor(Math.random() * this.listSongs().length);
        } while (randomIndex === currentIndex);
  
        nextIndex = randomIndex;
        break;
  
      case TypePlayEnum.REPEAT:
        if (currentIndex < this.listSongs().length - 1) {
          nextIndex = currentIndex + 1;
        } else {
          nextIndex = 0;
        }
        break;
  
      default:
        if (currentIndex < this.listSongs().length - 1) {
          nextIndex = currentIndex + 1;
        } else {
          nextIndex = 0;
        }
        break;
    }
  
    this.songSelected.set(this.listSongs()[nextIndex]);
    this.songSelected().isPlaying = true;
    this.updateMediaSessionMetadata();
  }

  public changeSongBack(): void {
    const typePlay = this.currentTypePlay();
    const currentIndex = this.listSongs().indexOf(this.songSelected());
    let previousIndex: number;
    const currentSong = this.songSelected();

    if (currentSong) {
      currentSong.isPlaying = false;
    }

    switch (typePlay) {
      case TypePlayEnum.SHUFFLE:
        let randomIndex = 0;
        do {
          randomIndex = Math.floor(Math.random() * this.listSongs().length);
        } while (randomIndex === currentIndex);

        previousIndex = randomIndex;
        break;

      case TypePlayEnum.REPEAT:
        if (currentIndex === 0) {
          previousIndex = this.listSongs().length - 1;
        } else {
          previousIndex = currentIndex - 1;
        }
        break;

      default:
        if (currentIndex === 0) {
          previousIndex = this.listSongs().length - 1;
        } else {
          previousIndex = currentIndex - 1;
        }
        break;
    }

    this.songSelected.set(this.listSongs()[previousIndex]);
    this.songSelected().isPlaying = true;
    this.updateMediaSessionMetadata();
  }

  public playAudio(): void {
    this.songSelected().isPlaying = true;
    this.devicesConfigService.playBackState();
  }

  public stopAudio(): void {
    this.devicesConfigService.stopBackState();
  }

  public changeFavoriteSong(): void {
    this.songSelected().isFavorite = !this.songSelected().isFavorite;
  }

  private updateMediaSessionMetadata(): void {
    const song = this.songSelected();
    if (song && song.name && song.artist) {
      const artwork: string[] = song.image ? [song.image] : [];
      this.devicesConfigService.setMediaSessionMetadata(
        song.name,
        song.artist,
        song.album,
        artwork
      );
    }
  }

  public setupMediaSessionHandlers(playAudio: Function, stopAudio: Function, changeSongNext: Function, changeSongBack: Function ): void {
    this.devicesConfigService.setMediaSessionHandlers(
      () => playAudio(),
      () => stopAudio(),
      () => changeSongNext(),
      () => changeSongBack()
    );
  }
}