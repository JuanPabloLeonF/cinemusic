import { ElementRef, inject, Injectable, signal, WritableSignal } from '@angular/core';
import { Song, TypePlayEnum } from '../../models/music/songs';
import { DevicesConfigurationServiceService } from '../../utils/common/devices-configuration-service.service';

@Injectable({
  providedIn: 'root'
})
export class StateMusicPlayerService {

  public activateMenuMobile: WritableSignal<boolean> = signal<boolean>(false);
  public activateMenu: WritableSignal<boolean> = signal<boolean>(false);
  public selectedSong: WritableSignal<Song> = signal<Song>({} as Song);
  public listSongs: WritableSignal<Song[]> = signal<Song[]>([]);
  public currentTypePlay: WritableSignal<TypePlayEnum> = signal<TypePlayEnum>(TypePlayEnum.SHUFFLE);
  private devicesConfigService: DevicesConfigurationServiceService = inject(DevicesConfigurationServiceService);
  public audioRef: WritableSignal<ElementRef<HTMLAudioElement>> = signal<ElementRef<HTMLAudioElement>>({} as ElementRef<HTMLAudioElement>);
  public autoPlaySongState: WritableSignal<boolean> = signal<boolean>(false);

  public playAudio(): void {
    this.audioRef().nativeElement.play();
    this.selectedSong().isPlaying = true;
    this.autoPlaySongState.set(true);
    this.devicesConfigService.playBackState();
  }

  public setSongSelected(song: Song): void {
    this.selectedSong().isPlaying = false;
    this.selectedSong.set(song);
    this.selectedSong().isPlaying = true;
    this.updateMediaSessionMetadata();
  }

  public changeSongNext(): void {

    if (this.listSongs().length <= 1) {
      this.selectedSong().isPlaying = true;
      this.updateMediaSessionMetadata();
      return;
    }

    const typePlay = this.currentTypePlay();
    const currentIndex = this.listSongs().indexOf(this.selectedSong());
    let nextIndex = 0;
    const currentSong = this.selectedSong();

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
  
    this.selectedSong.set(this.listSongs()[nextIndex]);
    this.selectedSong().isPlaying = true;
    this.updateMediaSessionMetadata();
  }

  public changeSongBack(): void {

    if (this.listSongs().length <= 1) {
      this.selectedSong().isPlaying = true;
      this.updateMediaSessionMetadata();
      return;
    }

    const typePlay = this.currentTypePlay();
    const currentIndex = this.listSongs().indexOf(this.selectedSong());
    let previousIndex: number;
    const currentSong = this.selectedSong();

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

    this.selectedSong.set(this.listSongs()[previousIndex]);
    this.selectedSong().isPlaying = true;
    this.updateMediaSessionMetadata();
  }

  public stopAudio(): void {
    this.audioRef().nativeElement.pause();
    this.autoPlaySongState.set(false);
    this.devicesConfigService.stopBackState();
  }

  public changeFavoriteSong(): void {
    this.selectedSong().isFavorite = !this.selectedSong().isFavorite;
  }

  public changeFavoriteSonSelected(song: Song): void {
    song.isFavorite = !song.isFavorite;
  }

  public setupMediaSessionHandlers(playAudio: Function, stopAudio: Function, changeSongNext: Function, changeSongBack: Function ): void {
    this.devicesConfigService.setMediaSessionHandlers(
      () => playAudio(),
      () => stopAudio(),
      () => changeSongNext(),
      () => changeSongBack()
    );
  }

  private updateMediaSessionMetadata(): void {
    const song = this.selectedSong();
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
}
