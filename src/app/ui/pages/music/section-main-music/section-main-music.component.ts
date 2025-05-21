import { Component, ElementRef, input, InputSignal, linkedSignal, OnInit, output, OutputEmitterRef, ViewChild, WritableSignal } from '@angular/core';
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

  public songSelected: InputSignal<Song> = input<Song>(listDataMusicData[0]);
  private linkedSongSelected: WritableSignal<Song> = linkedSignal(this.songSelected);
  public songSelectedOutput: OutputEmitterRef<Song> = output<Song>();

  @ViewChild('containerCaroussel') containerCarousselRef!: ElementRef;
  private scrollAmount: number = 240;
  protected listdataMusic: Song[] = listDataMusicData;

  ngOnInit(): void {
    this.songSelectedOutput.emit(this.listdataMusic[0]);
  }

  protected getSong(song: Song): void {
    this.songSelectedOutput.emit(song);
    this.linkedSongSelected.set(song)
  }

  scrollLeft(): void {
    this.containerCarousselRef.nativeElement.scrollLeft -= this.scrollAmount;
  }

  scrollRight(): void {
    this.containerCarousselRef.nativeElement.scrollLeft += this.scrollAmount;
  }
}
