import { Component, OnInit } from '@angular/core';
import { Song } from '../../../../domain/models/music/songs';
import { listDataMusicData } from '../../../../domain/utils/data/music';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-list-music-player',
  imports: [NgClass],
  templateUrl: './list-music-player.component.html',
  styleUrl: './list-music-player.component.css'
})
export class ListMusicPlayerComponent implements OnInit {

  protected songSelected: Song = {} as Song;
  protected songs: Song[] = [];

  ngOnInit(): void {
    this.songs = listDataMusicData.filter((song) => song.isFavorite === true);
    this.songs = listDataMusicData;
    this.songSelected = this.songs[1];
  }
}
