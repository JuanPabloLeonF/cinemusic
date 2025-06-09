import { Component, HostListener, input, InputSignal, OnInit, output, OutputEmitterRef } from '@angular/core';
import { Song } from '../../../../domain/models/music/songs';
import { listDataMusicData } from '../../../../domain/utils/data/music';
import { NgClass } from '@angular/common';
import { ContainerSongItemComponent } from './container-song-item/container-song-item.component';

@Component({
  selector: 'app-list-music-player',
  imports: [
    NgClass, 
    ContainerSongItemComponent
  ],
  templateUrl: './list-music-player.component.html',
  styleUrl: './list-music-player.component.css'
})
export class ListMusicPlayerComponent implements OnInit {

  public songOuputSelected: OutputEmitterRef<Song> = output<Song>();
  protected songs: Song[] = [];
  protected filterSelected: string = 'all';
  protected toggleGender: boolean = false;
  protected genders: string[] = ["Pop", "Rock", "Jazz", "Hip hop", "Rap", "Country", "Electronic", "Indie", "Metal", "R&B"];

  ngOnInit(): void {
    this.filtersSongs();
  }

  protected songSelected(song: Song): void {
    this.songOuputSelected.emit(song);
  }

  protected selectedFilter(filter: string): void {
    if (filter !== 'gender') {
      this.toggleGender = false;
    }
    this.filterSelected = filter;
    this.filtersSongs();
  }

  private filtersSongs(album?: string): void {
    if (this.filterSelected === 'all') {
      this.songs = listDataMusicData;
    } else if (this.filterSelected === 'favorite') {
      this.songs = listDataMusicData.filter((song) => song.isFavorite === true);
    } else if (this.filterSelected === 'gender') {
      this.toggleGender = !this.toggleGender;
    } else if (this.filterSelected === "album") {
      this.songs = listDataMusicData.filter((song) => song.album === album);
    }
  }

  protected filtersSongsByGenders(gender: string): void {
    this.songs = listDataMusicData.filter((song) => song.gender.toLowerCase() === gender.toLowerCase());
  }

  
}
