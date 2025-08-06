import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs';
import { SongMapper } from '../mappers/mappers_songs';

export const mapperInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    map(event => {
      if (event instanceof HttpResponse) {
        const mappedData = SongMapper.fromJsonArrayToSongs(event.body);
        return event.clone({ body: mappedData });
      }
      return event;
    })
  );
};