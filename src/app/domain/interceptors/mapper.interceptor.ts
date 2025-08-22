import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs';
import { SongMapper } from '../mappers/mappers_songs';
import { GenderMapper } from '../mappers/mapper_genders';

export const mapperInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    map(event => {
      if (event instanceof HttpResponse) {
        let mappedData: any;

        if (req.url.includes("music_data_gender")) {
          if (Array.isArray(event.body)) {
            mappedData = GenderMapper.fromJsonArrayToGenders(event.body);
          } else {
            mappedData = GenderMapper.fromJsonToGender(event.body);
          }
        } else if(req.url.includes("music_data_songs")) {
          if (Array.isArray(event.body)) {
            mappedData = SongMapper.fromJsonArrayToSongs(event.body);
          } else {
            mappedData = SongMapper.fromJsonToSong(event.body);
          }
        }

        return event.clone({ body: mappedData });
      }
      return event;
    })
  );
};
