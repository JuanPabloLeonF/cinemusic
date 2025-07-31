import { inject, Injectable } from '@angular/core';
import { Song } from '../models/music/songs';
import { listDataMusicData } from '../utils/data/music';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

    private data: Song[] = listDataMusicData;

    public getAll(): Song[] {
        return this.data;
    }

    public getOne(id: string): Song {
        return this.data.find((item) => item.id === id) as Song;
    }

}