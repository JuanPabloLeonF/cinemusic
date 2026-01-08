import { Component, ElementRef, inject, input, InputSignal, OnChanges, SimpleChanges, ViewChild, WritableSignal } from '@angular/core';
import { SvgPlayComponent } from "../../../components/svg-play/svg-play.component";
import { NgClass } from "@angular/common";
import { Series } from '../../../../domain/models/series/series';
import { SvgArrowBackComponent } from "../../../components/svg-arrow-back/svg-arrow-back.component";
import { SvgArrowNextComponent } from "../../../components/svg-arrow-next/svg-arrow-next.component";
import { SvgArrowSectionComponent } from "../../../components/svg-arrow-section/svg-arrow-section.component";
import { StateSerieListGendersService } from '../../../../domain/states/series/state-serie-list-genders.service';

@Component({
  selector: 'app-container-scroll-series',
  imports: [SvgPlayComponent, NgClass, SvgArrowBackComponent, SvgArrowNextComponent, SvgArrowSectionComponent],
  templateUrl: './container-scroll-series.component.html',
  styleUrl: './container-scroll-series.component.css'
})
export class ContainerScrollSeriesComponent implements OnChanges {
  
  @ViewChild('scrollContainer', { static: true })
  scrollContainer!: ElementRef<HTMLDivElement>;
  public gender: InputSignal<string> = input<string>("");
  

  private stateSerieListGendersService: StateSerieListGendersService = inject(StateSerieListGendersService);
  protected listDataSerieFiltered: WritableSignal<Series[]> = this.stateSerieListGendersService.listDataSerieFiltered;
  public seriesSelected: String = "1";

  ngOnChanges(changes: SimpleChanges) {
    if (changes['gender']) {
      this.stateSerieListGendersService.listSeriesFilteredByGender(this.gender());
    }
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
