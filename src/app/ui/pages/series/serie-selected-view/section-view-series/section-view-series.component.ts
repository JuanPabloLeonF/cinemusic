import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { SvgPlayComponent } from "../../../../components/svg-play/svg-play.component";
import { SvgScreenMaxComponent } from "../../../../components/svg-screen-max/svg-screen-max.component";
import { SvgConfigurationComponent } from "../../../../components/svg-configuration/svg-configuration.component";
import { SvgStopComponent } from "../../../../components/svg-stop/svg-stop.component";
import { FormsModule } from '@angular/forms';
import { SeriesVideo } from '../../../../../domain/models/series/series';
import { NumberFormatStyle } from '@angular/common';

@Component({
  selector: 'app-section-view-series',
  imports: [SvgPlayComponent, SvgScreenMaxComponent, SvgConfigurationComponent, SvgStopComponent, FormsModule],
  templateUrl: './section-view-series.component.html',
  styleUrl: './section-view-series.component.css'
})
export class SectionViewSeriesComponent implements AfterViewInit {

  protected serieSelected: SeriesVideo = {
    "id": "1",
    "name": "Horizonte Final",
    "image": "images/series/Spider-Manlejosdecasa.webp",
    "description": "Un grupo de científicos descubre una señal proveniente de los límites del universo que podría cambiar el destino de la humanidad.",
    "year": 2021,
    "gender": "accion",
    "rating": 8.4,
    "video": "images/series/spiderman-triler.mp4"
  }

  @ViewChild('videoRef') videoRef!: ElementRef<HTMLVideoElement>;
  @ViewChild('timeRangeRef') timeRangeRef!: ElementRef<HTMLVideoElement>;

  protected timeValue: number = 0;
  protected currentTime: string = '0:00';
  protected totalDuration: string = '0:00';
  protected isPlaying: boolean = false;
  protected fakeFullscreen: boolean = false;

  ngAfterViewInit(): void {
    if (this.videoRef) {
      this.updateRangeBackgroundTime();

      this.videoRef.nativeElement.addEventListener('loadedmetadata', () => {
        this.totalDuration = this.formatTime(this.videoRef.nativeElement.duration);
        this.timeValue = 0;
        this.currentTime = "0:00";
        this.updateRangeBackgroundTime();
        this.onPlay();
      });

      this.videoRef.nativeElement.addEventListener('timeupdate', () => {
        this.updateProgress();
      });
    }
  }

  protected onTimeChange(): void {
    if (this.videoRef) {
      const duration = this.videoRef.nativeElement.duration;
      if (!isNaN(duration) && duration > 0) {
        this.videoRef.nativeElement.currentTime = (this.timeValue / 100) * duration;
        this.currentTime = this.formatTime(this.videoRef.nativeElement.currentTime);
        this.updateRangeBackgroundTime();
      }
    }
  }

  protected updateRangeBackgroundTime(): void {
    const progress = this.timeValue;
    
    if (this.timeRangeRef && this.timeRangeRef.nativeElement) {
      this.timeRangeRef.nativeElement.style.setProperty('--range-progress', `${progress}%`);
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

  protected updateProgress(): void {
    if (this.videoRef && this.videoRef.nativeElement) {
      const currentTime = this.videoRef.nativeElement.currentTime;
      const duration = this.videoRef.nativeElement.duration;

      this.currentTime = this.formatTime(currentTime);
      if (!isNaN(duration) && duration > 0) {
        this.timeValue = (currentTime / duration) * 100;
      } else {
        this.timeValue = 0;
      }
      this.updateRangeBackgroundTime();
    }
  }

  protected onPlay(): void {
    if (this.videoRef) {
      this.videoRef.nativeElement.play();
      this.isPlaying = true;
    }
  }

  protected onPause(): void {
    if (this.videoRef) {
      this.videoRef.nativeElement.pause();
      this.isPlaying = false;
    }
  }

  protected onMaxScreen(): void {
    this.fakeFullscreen = !this.fakeFullscreen;
  }
}
