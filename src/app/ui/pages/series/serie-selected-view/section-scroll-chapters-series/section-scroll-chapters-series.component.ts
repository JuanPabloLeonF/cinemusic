import { ChangeDetectionStrategy, Component, ElementRef, inject, ViewChild, WritableSignal } from '@angular/core';
import { SvgArrowBackComponent } from "../../../../components/svg-arrow-back/svg-arrow-back.component";
import { SvgArrowNextComponent } from "../../../../components/svg-arrow-next/svg-arrow-next.component";
import { StateSerieSelectedViewService } from '../../../../../domain/states/series/state-serie-selected-view.service';
import { Chapter } from '../../../../../domain/models/series/series';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-section-scroll-chapters-series',
  imports: [NgOptimizedImage, SvgArrowBackComponent, SvgArrowNextComponent],
  templateUrl: './section-scroll-chapters-series.component.html',
  styleUrl: './section-scroll-chapters-series.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SectionScrollChaptersSeriesComponent {

  @ViewChild('scrollContainer', { static: true }) scrollContainer!: ElementRef<HTMLDivElement>;
  protected stateSerieSelectedViewService: StateSerieSelectedViewService = inject(StateSerieSelectedViewService);
  protected chapterSelected: WritableSignal<Chapter> = this.stateSerieSelectedViewService.chapterSelected;
  protected listDataChapters: WritableSignal<Chapter[]> = this.stateSerieSelectedViewService.listChaptersSelected;

  public scrollNext() {
    this.scrollContainer.nativeElement.scrollBy({
      left: 225, 
      behavior: 'smooth'
    });
  }

  public scrollBack() {
    this.scrollContainer.nativeElement.scrollBy({
      left: -225,
      behavior: 'smooth'
    });
  }
}

