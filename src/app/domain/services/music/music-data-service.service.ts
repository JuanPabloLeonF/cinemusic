import { effect, inject, Injectable, signal, WritableSignal } from '@angular/core';
import { MusicService } from './music.service';
import { Song } from '../../models/music/songs';
import { toSignal } from '@angular/core/rxjs-interop';
import { Observable, Subject, switchMap } from 'rxjs';
import { Gender } from '../../models/music/gender';
import { ListSongs, PlayList } from '../../models/music/play-list';
import { Artis } from '../../models/music/artis';

@Injectable({
  providedIn: 'root'
})
export class MusicDataService {

  private musicService: MusicService = inject(MusicService);

  public songMostListened = this.createSignalWithRefresh<Song>(
    () => this.musicService.apisSongs.getSongMostListened(),
    {} as Song
  );

  public newSong = this.createSignalWithRefresh<Song>(
    () => this.musicService.apisSongs.getSongNew(),
    {} as Song
  );

  public songsHistory = this.createSignalWithRefresh<Song[]>(
    () => this.musicService.apisSongs.getAllHistory(),
    []
  );

  public getGenderMostListened = this.createSignalWithRefresh<Gender>(
    () => this.musicService.apisGender.getGenderMostListened(),
    {} as Gender
  );

  public getDataPlayList = this.createSignalWithRefresh<PlayList>(
    () => this.musicService.apisPlayList.getDataPlayList(),
    {} as PlayList
  );

  public getArtirstMostListened = this.createSignalWithRefresh<Artis>(
    () => this.musicService.apisArtist.getArtist(),
    {} as Artis
  )

  public allSongs = this.createSignalWithRefresh<Song[]>(
    () => this.musicService.apisSongs.getAll(),
    []
  );

  public getAllListSongs = this.createSignalWithRefresh<ListSongs[]>(
    () => this.musicService.apisListSongs.getAll(),
    []
  );

  public createNewListSongs(listSongs: any): Observable<ListSongs> {
    return this.musicService.apisListSongs.createNewListSongs(listSongs);
  }

  public deleteSongOfList(idSong: string, idList: string): void {
    this.musicService.apisListSongs.deleteSongOfList(idSong, idList);
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
