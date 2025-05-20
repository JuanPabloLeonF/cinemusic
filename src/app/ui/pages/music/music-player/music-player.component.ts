import { Component, ElementRef, AfterViewInit, ViewChild, InputSignal, input, } from '@angular/core';
import { Song } from '../../../../domain/models/music/songs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-music-player',
  imports: [FormsModule],
  templateUrl: './music-player.component.html',
  styleUrl: './music-player.component.css'
})
export class MusicPlayerComponent implements AfterViewInit {

  public inputSong:InputSignal<Song> = input<Song>({} as Song);

  @ViewChild('volumeRange') volumeRangeRef!: ElementRef<HTMLInputElement>;
  @ViewChild('audioPlayer') audioRef!: ElementRef<HTMLAudioElement>;
  protected audioState: boolean = false;
  protected volumeValue: number = 100;
  protected progressTime: number = 0;

  ngAfterViewInit(): void {
    if (this.audioRef && this.volumeRangeRef) {
      this.audioRef.nativeElement.volume = this.volumeValue;
      this.updateRangeBackground();
      this.progressTime = this.audioRef.nativeElement.currentTime;

      this.audioRef.nativeElement.addEventListener('loadedmetadata', () => {
        this.audioRef.nativeElement.volume = this.volumeValue / 100;
      });

      this.audioRef.nativeElement.addEventListener('volumechange', () => {
        this.volumeValue = this.audioRef.nativeElement.volume * 100;
        this.updateRangeBackground();
      });
    }
  }

  protected playAudio(): void {
    this.audioRef.nativeElement.play();
    this.audioState = true;
  }

  protected stopAudio(): void {
    this.audioRef.nativeElement.pause();
    this.audioState = false;
  }

  protected changeVolume(): void {
    if (this.audioRef && this.volumeRangeRef) {
      this.audioRef.nativeElement.volume = this.volumeValue / 100;
      this.updateRangeBackground();
    }
  }

  protected updateRangeBackground(): void {
    if (this.volumeRangeRef && this.volumeRangeRef.nativeElement) {
      const inputElement = this.volumeRangeRef.nativeElement;
      const value = ((parseFloat(inputElement.value) - parseFloat(inputElement.min)) /
                    (parseFloat(inputElement.max) - parseFloat(inputElement.min))) * 100;
      inputElement.style.setProperty('--range-progress', `${value}%`);
    }
  }
}
