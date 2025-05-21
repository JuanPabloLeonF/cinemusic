import { Component, ElementRef, OnInit, output, OutputEmitterRef, ViewChild } from '@angular/core';
import { listDataMusicData } from '../../../../domain/utils/data/music';
import { Song } from '../../../../domain/models/music/songs';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-section-main-music',
  imports: [NgClass],
  templateUrl: './section-main-music.component.html',
  styleUrl: './section-main-music.component.css'
})
export class SectionMainMusicComponent implements OnInit {

  public songSelectedOutput: OutputEmitterRef<Song> = output<Song>();

  @ViewChild('containerCaroussel') containerCarousselRef!: ElementRef;
  private scrollAmount: number = 240;
  protected listdataMusic: Song[] = listDataMusicData;
  protected songSelected: Song = {} as Song;

  ngOnInit(): void {
    this.songSelected = this.listdataMusic[0];
    this.songSelectedOutput.emit(this.songSelected);
  }

  protected getSong(song: Song): void {
    this.songSelected = song;
    this.songSelectedOutput.emit(song);
  }

  scrollLeft(): void {
    this.containerCarousselRef.nativeElement.scrollLeft -= this.scrollAmount;
  }

  scrollRight(): void {
    this.containerCarousselRef.nativeElement.scrollLeft += this.scrollAmount;
  }
}
