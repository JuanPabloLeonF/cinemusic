import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { ListSongs } from '../../models/music/play-list';
import { MusicDataService } from '../../services/music/music-data-service.service';
import { Song } from '../../models/music/songs';

@Injectable({
  providedIn: 'root'
})
export class StateMyListSongsService {

  private musicDataService: MusicDataService = inject(MusicDataService);
  public activateSection: WritableSignal<boolean> = signal<boolean>(false);
  public listsListSongs: WritableSignal<ListSongs[]> = signal<ListSongs[]>([]);
  public listSongsSelected: WritableSignal<ListSongs> = signal<ListSongs>({} as ListSongs);

  public deleteSongOfList(song: Song, idList: string): void {
    this.musicDataService.deleteSongOfList(song.id, idList);
  }
}
