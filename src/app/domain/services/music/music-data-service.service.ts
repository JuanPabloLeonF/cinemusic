import { effect, inject, Injectable, signal, WritableSignal } from '@angular/core';
import { MusicService } from './music.service';
import { Song } from '../../models/music/songs';
import { toSignal } from '@angular/core/rxjs-interop';
import { Observable } from 'rxjs';
import { Gender } from '../../models/music/gender';
import { PlayList } from '../../models/music/play-list';
import { Artis } from '../../models/music/artis';

@Injectable({
  providedIn: 'root'
})
export class MusicDataService {

  private musicService = inject(MusicService);

  public songMostListened = this.createWritableFromObservable<Song>(
    this.musicService.getSongMostListened(),
    {} as Song
  );

  public newSong = this.createWritableFromObservable<Song>(
    this.musicService.getSongNew(),
    {} as Song
  );

  public songsHistory = this.createWritableFromObservable<Song[]>(
    this.musicService.getAllHistory(),
    []
  );

  public getGenderMostListened = this.createWritableFromObservable<Gender>(
    this.musicService.getGenderMostListened(),
    {} as Gender
  );

  public getDataPlayList = this.createWritableFromObservable<PlayList>(
    this.musicService.getDataPlayList(),
    {} as PlayList
  );

  public getArtirstMostListened = this.createWritableFromObservable<Artis>(
    this.musicService.getArtist(),
    {} as Artis
  )

  public allSongs = this.createWritableFromObservable<Song[]>(
    this.musicService.getAll(),
    []
  );

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
