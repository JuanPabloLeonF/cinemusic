import { inject, Injectable } from '@angular/core';
import { ListSeriesService } from './list-series.service';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  
  public apiListSeries = inject(ListSeriesService);
}
