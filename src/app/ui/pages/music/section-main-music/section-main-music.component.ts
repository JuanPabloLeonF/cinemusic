import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { listDataMusicData } from '../../../../domain/utils/data/music';
import { Song } from '../../../../domain/models/music/songs';

@Component({
  selector: 'app-section-main-music',
  imports: [],
  templateUrl: './section-main-music.component.html',
  styleUrl: './section-main-music.component.css'
})
export class SectionMainMusicComponent implements OnInit {

  @ViewChild('containerCaroussel') containerCarousselRef!: ElementRef;
  scrollAmount = 240;

  protected listdataMusic: Song[] = listDataMusicData;
  protected songSelected: Song = {} as Song;

  ngOnInit(): void {
    this.songSelected = this.listdataMusic[0];
  }

  protected playAudio(): void {
    const audio = document.querySelector('#audio') as HTMLAudioElement;
    audio.play();
  }

  scrollLeft(): void {
    this.containerCarousselRef.nativeElement.scrollLeft -= this.scrollAmount;
  }

  scrollRight(): void {
    this.containerCarousselRef.nativeElement.scrollLeft += this.scrollAmount;
  }
}
