import { effect, inject, Injectable, signal, WritableSignal } from '@angular/core';
import { MusicService } from './music.service';
import { Song } from '../../models/music/songs';
import { toSignal } from '@angular/core/rxjs-interop';
import { Observable } from 'rxjs';
import { Gender } from '../../models/music/gender';
import { ListSongs, PlayList } from '../../models/music/play-list';
import { Artis } from '../../models/music/artis';

@Injectable({
  providedIn: 'root'
})
export class MusicDataService {

  private musicService = inject(MusicService);

  public songMostListened = this.createWritableFromObservable<Song>(
    this.musicService.apisSongs.getSongMostListened(),
    {} as Song
  );

  public newSong = this.createWritableFromObservable<Song>(
    this.musicService.apisSongs.getSongNew(),
    {} as Song
  );

  public songsHistory = this.createWritableFromObservable<Song[]>(
    this.musicService.apisSongs.getAllHistory(),
    []
  );

  public getGenderMostListened = this.createWritableFromObservable<Gender>(
    this.musicService.apisGender.getGenderMostListened(),
    {} as Gender
  );

  public getDataPlayList = this.createWritableFromObservable<PlayList>(
    this.musicService.apisPlayList.getDataPlayList(),
    {} as PlayList
  );

  public getArtirstMostListened = this.createWritableFromObservable<Artis>(
    this.musicService.apisArtist.getArtist(),
    {} as Artis
  )

  public allSongs = this.createWritableFromObservable<Song[]>(
    this.musicService.apisSongs.getAll(),
    []
  );

  public getAllListSongs = this.createWritableFromObservable<ListSongs[]>(
    this.musicService.apisListSongs.getAll(),
    []
  );

  public createNewListSongs(listSongs: any): Observable<ListSongs> {
    return this.musicService.apisListSongs.createNewListSongs(listSongs);
  }

  private createWritableFromObservable<T>(
    source$: Observable<T>,
    initial: T
  ): WritableSignal<T> {
    const sig = signal(initial);
    const sigSource = toSignal(source$, { initialValue: initial });

    effect(() => {
      sig.set(sigSource());
    });

    return sig;
  }
}
