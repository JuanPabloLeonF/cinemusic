import { inject, Injectable } from '@angular/core';
import { ApiSeriesService } from './api-series.service';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  
  public apiSeries = inject(ApiSeriesService);
}
