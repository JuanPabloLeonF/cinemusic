import { ChangeDetectionStrategy, Component, computed, ElementRef, inject, input, InputSignal, ViewChild, WritableSignal } from '@angular/core';
import { SvgPlayComponent } from "../../../components/svg-play/svg-play.component";
import { NgClass, NgOptimizedImage } from "@angular/common";
import { Series } from '../../../../domain/models/series/series';
import { SvgArrowBackComponent } from "../../../components/svg-arrow-back/svg-arrow-back.component";
import { SvgArrowNextComponent } from "../../../components/svg-arrow-next/svg-arrow-next.component";
import { SvgArrowSectionComponent } from "../../../components/svg-arrow-section/svg-arrow-section.component";
import { StateSerieListGendersService } from '../../../../domain/states/series/state-serie-list-genders.service';
import { RouterModule } from '@angular/router';
import { StateSeriesService } from '../../../../domain/states/series/state-series.service';

@Component({
  selector: 'app-container-scroll-series',
  imports: [
    NgOptimizedImage,
    SvgPlayComponent, 
    NgClass, 
    SvgArrowBackComponent, 
    SvgArrowNextComponent, 
    SvgArrowSectionComponent, 
    RouterModule
  ],
  templateUrl: './container-scroll-series.component.html',
  styleUrl: './container-scroll-series.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContainerScrollSeriesComponent {
  
  @ViewChild('scrollContainer', { static: true }) scrollContainer!: ElementRef<HTMLDivElement>;
  public gender: InputSignal<string> = input<string>("");
  protected stateSeriesService: StateSeriesService = inject(StateSeriesService);
  protected stateSerieListGendersService: StateSerieListGendersService = inject(StateSerieListGendersService);

  protected listDataSerieFiltered = computed<Series[]>(() => {
    const gender: string = this.gender();
    const listData: Series[] = this.stateSerieListGendersService.listDataSerie();
    if (!gender || listData.length === 0) return [];
    return listData.filter(serie => serie.gender.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim() === gender.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim());
  })

  public getGenderNormalized(): string {
    return this.gender().toLowerCase().normalize('NFD').replace(/[^\u0000-\u007F]/g, '');
  }

  public scrollNext() {
    this.scrollContainer.nativeElement.scrollBy({
      left: 480, 
      behavior: 'smooth'
    });
  }

  public scrollBack() {
    this.scrollContainer.nativeElement.scrollBy({
      left: -480,
      behavior: 'smooth'
    });
  }
}
