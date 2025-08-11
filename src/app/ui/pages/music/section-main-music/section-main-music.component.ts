import { Component, inject, OnInit, WritableSignal } from '@angular/core';
import { Song } from '../../../../domain/models/music/songs';
import { InputSearchGenericComponent } from '../../../components/input-search-generic/input-search-generic.component';
import { ButtonFilterGenericComponent } from "../../../components/button-filter-generic/button-filter-generic.component";
import { CategoriesEnum, Category, TypeSearch, TypeSearchEnum } from '../../../../domain/models/music/category';
import { listDataCategories } from '../../../../domain/utils/data/categories';
import { NgClass } from '@angular/common';
import { WobbleDirective } from '../../../animations/wobble/wobble.directive';
import { StateMusicService } from '../../../../domain/states/state-music.service';
import { ScrollRevealDirective } from '../../../animations/scroll/scrolls-items.directive';
import { ScrollsCarouselDirective } from '../../../animations/scroll/scrolls-carousel.directive';

@Component({
  selector: 'app-section-main-music',
  imports: [
    InputSearchGenericComponent, 
    ButtonFilterGenericComponent,
    NgClass,
    WobbleDirective,
    ScrollRevealDirective,
    ScrollsCarouselDirective
  ],
  templateUrl: './section-main-music.component.html',
  styleUrl: './section-main-music.component.css'
})
export class SectionMainMusicComponent implements OnInit {

  private stateMusicService: StateMusicService = inject(StateMusicService);
  protected listCategories: Category[] = listDataCategories;
  protected listdataMusic: WritableSignal<Song[]> = this.stateMusicService.listSongs;
  private listDataMusicData: Song[] = this.listdataMusic();

  ngOnInit(): void {
    if (this.listdataMusic().length > 0) {
      this.listdataMusic()[0].isPlaying = true;
    }
  }


  protected getSong(song: Song): void {
    this.stateMusicService.setSongSelected(song);
  }

  protected filterSongs(data: TypeSearch): void {
    switch (data.type) {
      case TypeSearchEnum.CATEGORY:
        this.filterByCategory(data.value);
        break;
      case TypeSearchEnum.SEARCH:
        this.filterBySearch(data.value);
        break;
    }
  }

  private filterBySearch(search: String): void {
    this.listdataMusic.set(this.listDataMusicData.filter(s => s.name.toLowerCase().includes(search.toLowerCase())));
  }

  private filterByCategory(category: String): void {
    if (category === CategoriesEnum.ALL) {
      this.listdataMusic.set(this.listDataMusicData);
    } else if (category === CategoriesEnum.POP) {
      this.listdataMusic.set(this.listDataMusicData.filter(s => s.gender === CategoriesEnum.POP));
    } else if (category === CategoriesEnum.ROCK) {
      this.listdataMusic.set(this.listDataMusicData.filter(s => s.gender === CategoriesEnum.ROCK));
    } else if (category === CategoriesEnum.HIP_HOP) {
      this.listdataMusic.set(this.listDataMusicData.filter(s => s.gender === CategoriesEnum.HIP_HOP));
    } else if (category === CategoriesEnum.ELECTRONIC) {
      this.listdataMusic.set(this.listDataMusicData.filter(s => s.gender === CategoriesEnum.ELECTRONIC));
    } else if (category === CategoriesEnum.RAP) {
      this.listdataMusic.set(this.listDataMusicData.filter(s => s.gender === CategoriesEnum.RAP));
    } else if (category === CategoriesEnum.JAZZ) {
      this.listdataMusic.set(this.listDataMusicData.filter(s => s.gender === CategoriesEnum.JAZZ));
    } else if (category === CategoriesEnum.BLUES) {
      this.listdataMusic.set(this.listDataMusicData.filter(s => s.gender === CategoriesEnum.BLUES));
    } else if (category === CategoriesEnum.COUNTRY) {
      this.listdataMusic.set(this.listDataMusicData.filter(s => s.gender === CategoriesEnum.COUNTRY));
    } else if (category === CategoriesEnum.RNB) {
      this.listdataMusic.set(this.listDataMusicData.filter(s => s.gender === CategoriesEnum.RNB));
    } else if (category === CategoriesEnum.REGGAE) {
      this.listdataMusic.set(this.listDataMusicData.filter(s => s.gender === CategoriesEnum.REGGAE));
    } else if (category === CategoriesEnum.METAL) {
      this.listdataMusic.set(this.listDataMusicData.filter(s => s.gender === CategoriesEnum.METAL));
    }
  }

}
