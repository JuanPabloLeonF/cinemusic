import { Component, ElementRef, ViewChild } from '@angular/core';
import { SvgArrowBackComponent } from "../../../../components/svg-arrow-back/svg-arrow-back.component";
import { SvgArrowNextComponent } from "../../../../components/svg-arrow-next/svg-arrow-next.component";

@Component({
  selector: 'app-section-scroll-chapters-series',
  imports: [SvgArrowBackComponent, SvgArrowNextComponent],
  templateUrl: './section-scroll-chapters-series.component.html',
  styleUrl: './section-scroll-chapters-series.component.css'
})
export class SectionScrollChaptersSeriesComponent {

  @ViewChild('scrollContainer', { static: true }) scrollContainer!: ElementRef<HTMLDivElement>;

  protected chapterSelected = {
      id: "1",
      name: "capitulo 1",
      description: "esta seria la descripcion del capitulo",
      idSeries: "1",
      video: "images/series/spiderman-triler.mp4",
      season: "1",
      image: "images/logo.png"
  }

  protected listDataChapters = [
    {
      id: "1",
      name: "capitulo 1",
      description: "esta seria la descripcion del capitulo",
      idSeries: "1",
      video: "images/series/spiderman-triler.mp4",
      season: "1",
      image: "images/logo.png"
    },
    {
      id: "2",
      name: "capitulo 1",
      description: "esta seria la descripcion del capitulo",
      idSeries: "1",
      video: "images/series/spiderman-triler.mp4",
      season: "1",
      image: "images/logo1.png"
    },
    {
      id: "3",
      name: "capitulo 1",
      description: "esta seria la descripcion del capitulo",
      idSeries: "1",
      video: "images/series/spiderman-triler.mp4",
      season: "1",
      image: "images/logo2.png"
    },
    {
      id: "4",
      name: "capitulo 1",
      description: "esta seria la descripcion del capitulo",
      idSeries: "1",
      video: "images/series/spiderman-triler.mp4",
      season: "1",
      image: "images/logo.png"
    },
    {
      id: "5",
      name: "capitulo 1",
      description: "esta seria la descripcion del capitulo",
      idSeries: "1",
      video: "images/series/spiderman-triler.mp4",
      season: "1",
      image: "images/logo1.png"
    }
  ];

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

