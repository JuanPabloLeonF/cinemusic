import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { MusicService } from '../services/music.service';
import { Song } from '../models/music/songs';
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
    }

    public changeSongNext(): void {
        const currentIndex = this.listSongs.indexOf(this.songSelected());
        let nextIndex = 0;
    
        if (currentIndex < this.listSongs.length - 1) {
            nextIndex = currentIndex + 1;
        }
    
        const currentSong = this.songSelected();
        if (currentSong) {
            currentSong.isPlaying = false;
        }
    
        this.songSelected.set(this.listSongs[nextIndex]);
        this.songSelected().isPlaying = true;
    }

    public changeSongBack(): void {
        const currentIndex = this.listSongs.indexOf(this.songSelected());
        let previousIndex: number;
    
        if (currentIndex === 0) {
            previousIndex = this.listSongs.length - 1;
        } else {
            previousIndex = currentIndex - 1;
        }
    
        const currentSong = this.songSelected();
       
        if (currentSong) {
            currentSong.isPlaying = false;
        }
    
        this.songSelected.set(this.listSongs[previousIndex]);
        this.songSelected().isPlaying = true;
    }

    public playAudio(): void {

    }

    public stopAudio(): void {
        
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
          () => this.changeSongNext(),
          () => this.changeSongBack()
        );
      }
}