import { inject, Injectable } from '@angular/core';
import { SongService } from './song.service';
import { GenderService } from './gender.service';
import { ArtistService } from './artist.service';
import { PlayListService } from './play-list.service';
import { ListSongsService } from './list-songs.service';

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  public apisSongs: SongService = inject(SongService);
  public apisGender: GenderService = inject(GenderService);
  public apisArtist: ArtistService = inject(ArtistService);
  public apisPlayList: PlayListService = inject(PlayListService);
  public apisListSongs: ListSongsService = inject(ListSongsService);
}   