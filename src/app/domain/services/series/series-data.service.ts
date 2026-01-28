import { inject, Injectable, Signal } from '@angular/core';
import { SeriesService } from './series.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { Observable, Subject, switchMap } from 'rxjs';
import { Series } from '../../models/series/series';

@Injectable({
  providedIn: 'root'
})
export class SeriesDataService {

  private seriesService: SeriesService = inject(SeriesService);

  public getAllListSeries = this.createSignalWithRefresh<Series[]>(
    () => this.seriesService.apiSeries.getAll(),
    []
  );

  public getSeriesById(id: string): Observable<Series> {
    return this.seriesService.apiSeries.getById(id);
  }

  private createSignalWithRefresh<T>(source$: () => Observable<T>, initial: T) {
    const refreshTrigger = new Subject<void>();

    const sig = toSignal(
      refreshTrigger.pipe(
        switchMap(() => source$())
      ),
      { initialValue: initial }
    );

    const refresh = () => refreshTrigger.next();
    refresh();

    return { signal: sig, refresh };
  }
}

