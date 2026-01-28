import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { Season, Series, Chapter} from '../../models/series/series';
import { SeriesDataService } from '../../services/series/series-data.service';

@Injectable({
  providedIn: 'root'
})
export class StateSerieSelectedViewService {

  private seriesDataService: SeriesDataService = inject(SeriesDataService);
  public listOptions: WritableSignal<string[]> = signal([]);
  public serieSelected: WritableSignal<Series> = signal({} as Series);
  public seasonSelected: WritableSignal<Season> = signal({} as Season);
  public listChaptersSelected: WritableSignal<Chapter[]> = signal([]);
  public chapterSelected: WritableSignal<Chapter> = signal({} as Chapter);

  public getSerieById(id: string): void {
    this.seriesDataService.getSeriesById(id).subscribe((serie) => {
      this.serieSelected.set(serie);
      this.changeSeasonBySelectedSeasonOption(this.serieSelected().seasons?.[0].name || "");
      this.convertNumbersToListSeassons(this.serieSelected().seasons!.length);
    });
  }

  public changeSeasonBySelectedSeasonOption(selectedSeasonOption: string) {
    this.seasonSelected.set(this.serieSelected().seasons?.find(
      season => season.name.toLowerCase() === selectedSeasonOption.toLowerCase()
    )!);
    this.listChaptersSelected.set(this.seasonSelected().chapters);
    this.changeChapterById(this.listChaptersSelected()[0].id);
  }

  public changeChapterById(id: string) {
    this.chapterSelected.set(this.listChaptersSelected().find(
      chapter => chapter.id === id
    )!);
  }

  private convertNumbersToListSeassons(seasons: number): void {
    this.listOptions.set(
      Array.from({ length: seasons }, (_, i) => `Temporada ${i + 1}`)
    );
  }

}
