import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs';
import { SongMapper } from '../mappers/music/mappers_songs';
import { GenderMapper } from '../mappers/music/mapper_genders';
import { MapperPlayList } from '../mappers/music/mapper_play_list';
import { MapperArtist } from '../mappers/music/mapper_artist';
import { MapperListSongs } from '../mappers/music/mapper_list_songs';
import { SeriesMapper } from '../mappers/series/mapper_series';

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
        } else if(req.url.includes("music_data_play_list")) {
          mappedData = MapperPlayList.fromJsonToPlayList(event.body);
        } else if(req.url.includes("music_data_artist")) {
          if (Array.isArray(event.body)) {
            mappedData = MapperArtist.fromJsonArrayToArtis(event.body);
          } else {
            mappedData = MapperArtist.fromJsonToArtist(event.body);
          }
        } else if (req.url.includes("music_data_list_songs")) {
          if (Array.isArray(event.body)) {
            mappedData = MapperListSongs.fromJsonArrayToListSongs(event.body);
          } else {
            mappedData = MapperListSongs.fromJsonToListSongs(event.body);
          }
        } else if (req.url.includes("series_data_list")) {
          if (Array.isArray(event.body)) {
            mappedData = SeriesMapper.fromJsonArrayToSeries(event.body);
          } else {
            mappedData = SeriesMapper.fromJsonToSeries(event.body);
          }
        }

        return event.clone({ body: mappedData });
      }
      return event;
    })
  );
};
