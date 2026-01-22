import { Component, ElementRef, AfterViewInit, ViewChild, inject, WritableSignal, HostListener, signal } from '@angular/core';
import { Song, TypePlayEnum } from '../../../../domain/models/music/songs';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';
import { StateMusicService } from '../../../../domain/states/music/state-music.service';
import { TraslateVerticalDirective } from '../../../animations/traslate/traslate-vertical.directive';
import { TraslateVerticalDownDirective } from '../../../animations/traslate/traslate-vertical-down.directive';

interface AudioPlayCurrent {
  repeat: boolean,
  shuffle: boolean,
  volumeState: boolean,
}

@Component({
  selector: 'app-music-player',
  imports: [FormsModule, NgClass, TraslateVerticalDirective, TraslateVerticalDownDirective],
  templateUrl: './music-player.component.html',
  styleUrl: './music-player.component.css'
})
export class MusicPlayerComponent implements AfterViewInit {

  protected stateMusicService: StateMusicService = inject(StateMusicService);
  protected songSelected: WritableSignal<Song> = this.stateMusicService.stateMusicPlayerService.selectedSong;
  @ViewChild('containerVolumeMobile') containerVolumeMobile!: ElementRef<HTMLInputElement>; 
  @ViewChild('volumeRangeMobile') volumeRangeMobileRef!: ElementRef<HTMLInputElement>; 
  @ViewChild('volumeRange') volumeRangeRef!: ElementRef<HTMLInputElement>;
  @ViewChild('audioPlayer') audioRef!: ElementRef<HTMLAudioElement>;
  @ViewChild('timeRange') timeRangeRef!: ElementRef<HTMLInputElement>;
  @ViewChild('timeRangeMobile') timeRangeMobileRef!: ElementRef<HTMLInputElement>;
  
  protected audioPlayCurrent: AudioPlayCurrent = {
    repeat: false,
    shuffle: true,
    volumeState: true,
  };
  protected volumeValue: number = 50;
  protected timeValue: number = 0;
  protected currentTime: string = '0:00';
  protected totalDuration: string = '0:00';

  public playAudio(): void {
    this.stateMusicService.stateMusicPlayerService.playAudio();
  }

  public stopAudio(): void {
    this.stateMusicService.stateMusicPlayerService.stopAudio();
  }

  public changeSongNext(): void {
    this.stateMusicService.stateMusicPlayerService.changeSongNext();
  }

  public changeSongBack(): void {
    this.stateMusicService.stateMusicPlayerService.changeSongBack();
  }

  public changeFavoriteSong(): void {
    this.stateMusicService.stateMusicPlayerService.changeFavoriteSong();
  }

  ngAfterViewInit(): void {
    if (this.audioRef && this.volumeRangeRef) {
      this.stateMusicService.stateMusicPlayerService.audioRef.set(this.audioRef);
      this.audioRef.nativeElement.volume = this.volumeValue / 100;
      this.updateRangeBackgroundVolume();
      this.updateRangeBackgroundTime();

      this.audioRef.nativeElement.addEventListener('ended', () => {
        this.currentTime = "0:00";
        this.timeValue = 0;
        this.updateRangeBackgroundTime();
        
        if (this.audioPlayCurrent.repeat) {
          this.playAudio();
        } else if (this.audioPlayCurrent.shuffle) {
          this.changeSongNext();
        }
      });

      this.audioRef.nativeElement.addEventListener('loadedmetadata', () => {
        this.totalDuration = this.formatTime(this.audioRef.nativeElement.duration);
        this.timeValue = 0;
        this.currentTime = "0:00";
        this.updateRangeBackgroundTime();
      });

      this.audioRef.nativeElement.addEventListener('timeupdate', () => {
        this.updateProgress();
      });

      this.audioRef.nativeElement.addEventListener('volumechange', () => {
        this.volumeValue = this.audioRef.nativeElement.volume * 100;
        this.updateRangeBackgroundVolume();
        if (this.volumeValue === 0) {
          this.audioPlayCurrent.volumeState = false;
        } else {
          this.audioPlayCurrent.volumeState = true;
        }
      });

      this.stateMusicService.stateMusicPlayerService.setupMediaSessionHandlers(
        () => this.playAudio(),
        () => this.stopAudio(),
        () => this.changeSongNext(),
        () => this.changeSongBack()
      )
    }
  }
  
  protected typePlay(type: string): void {
    if (type == TypePlayEnum.SHUFFLE) {
      this.audioPlayCurrent.shuffle = true;
      this.audioPlayCurrent.repeat = false;
      this.stateMusicService.stateMusicPlayerService.currentTypePlay.set(TypePlayEnum.SHUFFLE);
    } else if (type == TypePlayEnum.REPEAT) {
      this.audioPlayCurrent.repeat = true;
      this.audioPlayCurrent.shuffle = false;
      this.stateMusicService.stateMusicPlayerService.currentTypePlay.set(TypePlayEnum.REPEAT)
    }
  }

  protected onVolumeChange(): void {
    if (this.audioRef && this.volumeRangeRef) {
      this.audioRef.nativeElement.volume = this.volumeValue / 100;
      this.updateRangeBackgroundVolume();
      this.audioPlayCurrent.volumeState = this.volumeValue > 0;
    }

    if (this.audioRef && this.volumeRangeMobileRef) {
      this.audioRef.nativeElement.volume = this.volumeValue / 100;
      this.updateRangeBackgroundVolume();
      this.audioPlayCurrent.volumeState = this.volumeValue > 0;
    }
  }

  protected onTimeChange(): void {
    if (this.audioRef) {
      const duration = this.audioRef.nativeElement.duration;
      if (!isNaN(duration) && duration > 0) {
        this.audioRef.nativeElement.currentTime = (this.timeValue / 100) * duration;
        this.currentTime = this.formatTime(this.audioRef.nativeElement.currentTime);
        this.updateRangeBackgroundTime();
      }
    }
  }

  protected changeVolumeNormal(): void {
    this.volumeValue = 50;
    this.onVolumeChange();
  }

  protected changeVolumeNull(): void {
    this.volumeValue = 0;
    this.onVolumeChange();
  }

  protected updateRangeBackgroundVolume(): void {
    if (this.volumeRangeRef && this.volumeRangeRef.nativeElement) {
      const inputElement = this.volumeRangeRef.nativeElement;
      const progress = this.volumeValue;
      inputElement.style.setProperty('--range-progress', `${progress}%`);
    }

    if (this.volumeRangeMobileRef && this.volumeRangeMobileRef.nativeElement) {
      const inputElement = this.volumeRangeMobileRef.nativeElement;
      const progress = this.volumeValue;
      inputElement.style.setProperty('--range-progress', `${progress}%`);
    }
  }

  protected updateRangeBackgroundTime(): void {
    const progress = this.timeValue;
    
    if (this.timeRangeRef && this.timeRangeRef.nativeElement) {
      this.timeRangeRef.nativeElement.style.setProperty('--range-progress', `${progress}%`);
    }
    
    if (this.timeRangeMobileRef && this.timeRangeMobileRef.nativeElement) {
      this.timeRangeMobileRef.nativeElement.style.setProperty('--range-progress', `${progress}%`);
    }
  }

  protected updateProgress(): void {
    if (this.audioRef && this.audioRef.nativeElement) {
      const currentTime = this.audioRef.nativeElement.currentTime;
      const duration = this.audioRef.nativeElement.duration;

      this.currentTime = this.formatTime(currentTime);
      if (!isNaN(duration) && duration > 0) {
        this.timeValue = (currentTime / duration) * 100;
      } else {
        this.timeValue = 0;
      }
      this.updateRangeBackgroundTime();
    }
  }

  protected formatTime(seconds: number): string {
    if (isNaN(seconds)) {
      return '0:00';
    }
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent): void {
    if (this.containerVolumeMobile) {
      const clickedInside = this.containerVolumeMobile.nativeElement.contains(event.target as Node);
      if (!clickedInside) {
        this.stateMusicService.stateMusicPlayerService.activateMenuMobile.set(false);
      }
    }
  }

}