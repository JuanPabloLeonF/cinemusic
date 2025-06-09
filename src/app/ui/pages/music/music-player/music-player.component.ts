import { Component, ElementRef, AfterViewInit, ViewChild, InputSignal, input, SimpleChanges, OnChanges, output, OutputEmitterRef, } from '@angular/core';
import { Song } from '../../../../domain/models/music/songs';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-music-player',
  imports: [FormsModule, NgClass],
  templateUrl: './music-player.component.html',
  styleUrl: './music-player.component.css'
})
export class MusicPlayerComponent implements AfterViewInit, OnChanges {

  public inputSong:InputSignal<Song> = input<Song>({} as Song);
  public ouputSong: OutputEmitterRef<boolean> = output<boolean>();
  public ouputChangeSong: OutputEmitterRef<string> = output<string>();

  @ViewChild('volumeRange') volumeRangeRef!: ElementRef<HTMLInputElement>;
  @ViewChild('audioPlayer') audioRef!: ElementRef<HTMLAudioElement>;
  @ViewChild('timeRange') timeRangeRef!: ElementRef<HTMLInputElement>;
  protected audioPlayCurrent: any = {
    repeat: true,
    shuffle: false,
    volumeState: true,
  };
  protected audioState: boolean = false;
  protected volumeValue: number = 50;
  protected timeValue: number = 0;
  protected currentTime: string = '0:00';
  protected totalDuration: string = '0:00';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['inputSong'] && this.audioRef) {
      if (this.audioPlayCurrent.shuffle) {
        this.audioState = true;
        this.playAudio();
      } else {
        this.audioState = false;
      }
    }

  }

  ngAfterViewInit(): void {
    if (this.audioRef && this.volumeRangeRef) {
      this.audioRef.nativeElement.volume = this.volumeValue / 100;
      this.updateRangeBackgroundVolume();
      this.updateRangeBackgroundTime();

      this.audioRef.nativeElement.addEventListener('ended', () => {
        this.currentTime = "0:00";
        if (this.audioPlayCurrent.repeat) {
          this.playAudio();
        } else if (this.audioPlayCurrent.shuffle) {
          this.ouputSong.emit(true);
        }
      });


      this.audioRef.nativeElement.addEventListener('loadedmetadata', () => {
        this.totalDuration = this.formatTime(this.audioRef.nativeElement.duration);
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
    }
  }

  protected changeSong(value: string): void {
    if (this.audioPlayCurrent.repeat) {
      this.ouputChangeSong.emit(value);
    } else if (this.audioPlayCurrent.shuffle) {
      this.ouputSong.emit(true);
    }
  }

  protected typePlay(type: string): void {
    if (type === 'shuffle') {
      this.audioPlayCurrent.shuffle = true;
      this.audioPlayCurrent.repeat = false;
    } else if (type === 'repeat') {
      this.audioPlayCurrent.repeat = true;
      this.audioPlayCurrent.shuffle = false;
    }
  }

  protected playAudio(): void {
    this.audioRef.nativeElement.play();
    this.audioState = true;
    this.inputSong().isPlaying = true;
  }

  protected stopAudio(): void {
    this.audioRef.nativeElement.pause();
    this.audioState = false;
  }

  protected changeVolume(): void {
    if (this.audioRef && this.volumeRangeRef) {
      this.audioRef.nativeElement.volume = this.volumeValue / 100;
      this.updateRangeBackgroundVolume();
    }
  }

  protected changeVolumeNormal(): void {
    this.volumeValue = 50;
    this.audioRef.nativeElement.volume = this.volumeValue / 100;
    this.updateRangeBackgroundVolume();
    this.audioPlayCurrent.volumeState = true;
  }

  protected changeVolumeNull(): void {
    this.volumeValue = 0;
    this.updateRangeBackgroundVolume();
    this.audioRef.nativeElement.volume = this.volumeValue / 100;
    this.audioPlayCurrent.volumeState = false;
  }

  protected updateRangeBackgroundVolume(): void {
    if (this.volumeRangeRef && this.volumeRangeRef.nativeElement) {
      const inputElement = this.volumeRangeRef.nativeElement;
      const value = ((parseFloat(inputElement.value) - parseFloat(inputElement.min)) /
                    (parseFloat(inputElement.max) - parseFloat(inputElement.min))) * 100;
      inputElement.style.setProperty('--range-progress', `${value}%`);
    }
  }

  protected updateRangeBackgroundTime(): void {
    if (this.timeRangeRef && this.timeRangeRef.nativeElement) {
      const inputElement = this.timeRangeRef.nativeElement;
      const value = ((this.timeValue - parseFloat(inputElement.min)) /
                    (parseFloat(inputElement.max) - parseFloat(inputElement.min))) * 100;
      inputElement.style.setProperty('--range-progress', `${value}%`);
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

  protected changeTime(): void {
    if (this.audioRef && this.timeRangeRef) {
      const duration = this.audioRef.nativeElement.duration;
      if (!isNaN(duration) && duration > 0) {
        this.audioRef.nativeElement.currentTime = (this.timeValue / 100) * duration;
      }
    }
  }
}