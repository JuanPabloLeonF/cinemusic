import { Component, ElementRef, ViewChild } from '@angular/core';
import { listDataMusicData } from '../../../../domain/utils/data/music';

@Component({
  selector: 'app-section-main-music',
  imports: [],
  templateUrl: './section-main-music.component.html',
  styleUrl: './section-main-music.component.css'
})
export class SectionMainMusicComponent {

  @ViewChild('containerCaroussel') containerCarousselRef!: ElementRef;
  scrollAmount = 240;

  protected listdataMusic: any[] = listDataMusicData;

  scrollLeft(): void {
    this.containerCarousselRef.nativeElement.scrollLeft -= this.scrollAmount;
  }

  scrollRight(): void {
    this.containerCarousselRef.nativeElement.scrollLeft += this.scrollAmount;
  }
}
