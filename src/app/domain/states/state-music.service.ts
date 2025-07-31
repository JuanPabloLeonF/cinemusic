import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { MusicService } from '../services/music.service';
import { Song, TypePlayEnum } from '../models/music/songs';
import { DevicesConfigurationServiceService } from '../services/devices-configuration-service.service';

@Injectable({
  providedIn: 'root'
})
export class StateMusicService {

    private devicesConfigService: DevicesConfigurationServiceService = inject(DevicesConfigurationServiceService);
    private musicService: MusicService = inject(MusicService);
    private listSongs: Song[] = [];
    public songSelected: WritableSignal<Song> = signal<Song>({} as Song);

    constructor() {
        this.listSongs = this.musicService.getAll();
        this.songSelected.set(this.listSongs[0]);
        this.updateMediaSessionMetadata()
        this.setupMediaSessionHandlers();
    }

    public changeSongNext(typePlay: String): void {
      const currentIndex = this.listSongs.indexOf(this.songSelected());
      let nextIndex = 0;
      const currentSong = this.songSelected();
    
      if (currentSong) {
        currentSong.isPlaying = false;
      }
    
      switch (typePlay) {
        case TypePlayEnum.SHUFFLE:
          let randomIndex = 0;
          do {
            randomIndex = Math.floor(Math.random() * this.listSongs.length);
          } while (randomIndex === currentIndex);
    
          nextIndex = randomIndex;
          break;
    
        case TypePlayEnum.REPEAT:
          if (currentIndex < this.listSongs.length - 1) {
            nextIndex = currentIndex + 1;
          } else {
            nextIndex = 0;
          }
          break;
    
        default:
          if (currentIndex < this.listSongs.length - 1) {
            nextIndex = currentIndex + 1;
          } else {
            nextIndex = 0;
          }
          break;
      }
    
      this.songSelected.set(this.listSongs[nextIndex]);
      this.songSelected().isPlaying = true;
      this.updateMediaSessionMetadata();
    }

    public changeSongBack(typePlay: String): void {
      const currentIndex = this.listSongs.indexOf(this.songSelected());
      let previousIndex: number;
      const currentSong = this.songSelected();
    
      if (currentSong) {
        currentSong.isPlaying = false;
      }
    
      switch (typePlay) {
        case TypePlayEnum.SHUFFLE:
          let randomIndex = 0;
          do {
            randomIndex = Math.floor(Math.random() * this.listSongs.length);
          } while (randomIndex === currentIndex);
    
          previousIndex = randomIndex;
          break;
    
        case TypePlayEnum.REPEAT:
          if (currentIndex === 0) {
            previousIndex = this.listSongs.length - 1;
          } else {
            previousIndex = currentIndex - 1;
          }
          break;
    
        default:
          if (currentIndex === 0) {
            previousIndex = this.listSongs.length - 1;
          } else {
            previousIndex = currentIndex - 1;
          }
          break;
      }
    
      this.songSelected.set(this.listSongs[previousIndex]);
      this.songSelected().isPlaying = true;
      this.updateMediaSessionMetadata();
    }

    public playAudio(): void {
      this.songSelected().isPlaying = true;
      this.devicesConfigService.playBackState();
    }

    public stopAudio(): void {
      this.songSelected().isPlaying = false;
      this.devicesConfigService.stopBackState();
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
    
    private setupMediaSessionHandlers(): void {
        this.devicesConfigService.setMediaSessionHandlers(
          () => this.playAudio(),
          () => this.stopAudio(),
          () => this.changeSongNext(""),
          () => this.changeSongBack("")
        );
      }
}