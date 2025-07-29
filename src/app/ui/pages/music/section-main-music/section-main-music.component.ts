import { AfterViewInit, Component, ElementRef, input, InputSignal, linkedSignal, OnDestroy, OnInit, output, OutputEmitterRef, ViewChild, WritableSignal } from '@angular/core';
import { listDataMusicData } from '../../../../domain/utils/data/music';
import { Song } from '../../../../domain/models/music/songs';
import { InputSearchGenericComponent } from '../../../components/input-search-generic/input-search-generic.component';
import { ButtonFilterGenericComponent } from "../../../components/button-filter-generic/button-filter-generic.component";
import { CategoriesEnum, Category } from '../../../../domain/models/music/category';
import { listDataCategories } from '../../../../domain/utils/data/categories';
import { NgClass } from '@angular/common';
import { WobbleDirective } from '../../../animations/wobble/wobble.directive';

@Component({
  selector: 'app-section-main-music',
  imports: [
    InputSearchGenericComponent, 
    ButtonFilterGenericComponent,
    NgClass,
    WobbleDirective
  ],
  templateUrl: './section-main-music.component.html',
  styleUrl: './section-main-music.component.css'
})
export class SectionMainMusicComponent implements OnInit, AfterViewInit, OnDestroy {

  public songSelected: InputSignal<Song> = input<Song>(listDataMusicData[0]);
  private linkedSongSelected: WritableSignal<Song> = linkedSignal(this.songSelected);
  public songSelectedOutput: OutputEmitterRef<Song> = output<Song>();
  protected listCategories: Category[] = listDataCategories;
  @ViewChild('filterContainer') filterContainer!: ElementRef<HTMLDivElement>;

  protected listdataMusic: Song[] = listDataMusicData;

  private carouselInterval: any;
  private currentScrollIndex: number = 0;

  ngOnInit(): void {
    if (this.listdataMusic.length > 0) {
      this.listdataMusic[0].isPlaying = true;
      this.songSelectedOutput.emit(this.listdataMusic[0]);
      this.linkedSongSelected.set(this.listdataMusic[0]);
    }
  }

  ngAfterViewInit(): void {
    this.startCarousel();
  }

  ngOnDestroy(): void {
    this.stopCarousel();
  }


  protected getSong(song: Song): void {
    const currentActiveSong = this.listdataMusic.find(s => s.isPlaying);
    if (currentActiveSong && currentActiveSong !== song) {
      currentActiveSong.isPlaying = false;
    }
    song.isPlaying = true;
    this.songSelectedOutput.emit(song);
    this.linkedSongSelected.set(song);

  }

  protected filterSongs(category: String): void {
    console.log(category)
    if (category == CategoriesEnum.ALL) {
      this.listdataMusic = listDataMusicData;
    } else {
      this.listdataMusic = listDataMusicData.filter(s => s.gender == category);
    }
  }

  private startCarousel(): void {
    this.stopCarousel();

    const container = this.filterContainer.nativeElement;
    const buttonElements = container.querySelectorAll('button');

    this.carouselInterval = setInterval(() => {

      this.currentScrollIndex++;

      if (this.currentScrollIndex >= buttonElements.length) {
        this.currentScrollIndex = 0;
      }

      const targetButton = buttonElements[this.currentScrollIndex] as HTMLElement;

      if (targetButton) {
        container.scrollTo({
          left: targetButton.offsetLeft - 8,
          behavior: 'smooth',
        });
      }
    }, 3000);
  }

  private stopCarousel(): void {
    if (this.carouselInterval) {
      clearInterval(this.carouselInterval);
      this.carouselInterval = null;
    }
  }

}
