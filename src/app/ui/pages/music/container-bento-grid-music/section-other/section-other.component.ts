import { Component } from '@angular/core';
import { SvgPlayComponent } from "../../../../components/svg-play/svg-play.component";
import { ScrollsCarouselDirective } from '../../../../animations/scroll/scrolls-carousel.directive';

const listMusicData = [
  {
    "id": "1",
    "name": "a sky full start",
    "image": "images/music/song1.jpg",
    "album": "album",
    "artist": "coldplay",
    "year": 2020,
    "gender": "POP",
    "rating": 5,
    "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta minus rerum ratione, aliquid fugiat consectetur culpa, blanditiis sapiente recusandae suscipit exercitationem ullam ex unde assumenda. Dolorum dicta rerum voluptate ab!",
    "audio": "images/music/song1.mp3",
    "isFavorite": true,
    "isPlaying": true
},  
{
    "id": "2",
    "name": "Another Love x Set Fire To The Rain | Altyazılı",
    "image": "images/music/song2.jpg",
    "album": "album",
    "artist": "no se",
    "year": 2020,
    "gender": "ELECTRONIC",
    "rating": 10,
    "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta minus rerum ratione, aliquid fugiat consectetur culpa, blanditiis sapiente recusandae suscipit exercitationem ullam ex unde assumenda. Dolorum dicta rerum voluptate ab!",
    "audio": "images/music/song2.mp3",
    "isFavorite": false,
    "isPlaying": false
},
{
    "id": "3",
    "name": "Hold On",
    "image": "images/music/song3.jpeg",
    "album": "album",
    "artist": "Chord Overstreet",
    "year": 2020,
    "gender": "POP",
    "rating": 10,
    "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta minus rerum ratione, aliquid fugiat consectetur culpa, blanditiis sapiente recusandae suscipit exercitationem ullam ex unde assumenda. Dolorum dicta rerum voluptate ab! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta minus rerum ratione, aliquid fugiat consectetur culpa, blanditiis sapiente recusandae suscipit exercitationem ullam ex unde assumenda. Dolorum dicta rerum voluptate ab!",
    "audio": "images/music/song3.mp3",
    "isFavorite": true,
    "isPlaying": false
},
{
    "id": "4",
    "name": "Sleepwalking",
    "image": "images/music/song4.jpg",
    "album": "album",
    "artist": "Bring Me The Horizon",
    "year": 2020,
    "gender": "METAL",
    "rating": 1,
    "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta minus rerum ratione, aliquid fugiat consectetur culpa, blanditiis sapiente recusandae suscipit exercitationem ullam ex unde assumenda. Dolorum dicta rerum voluptate ab!",
    "audio": "images/music/song4.webm",
    "isFavorite": true,
    "isPlaying": false
},
{
    "id": "5",
    "name": "Give It All ACOUSTIC Chords",
    "image": "images/music/song5.jpg",
    "album": "album",
    "artist": "The Amity Affliction",
    "year": 2020,
    "gender": "METAL",
    "rating": 1,
    "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta minus rerum ratione, aliquid fugiat consectetur culpa, blanditiis sapiente recusandae suscipit exercitationem ullam ex unde assumenda. Dolorum dicta rerum voluptate ab!",
    "audio": "images/music/song5.mp3",
    "isFavorite": true,
    "isPlaying": false
},
{
    "id": "6",
    "name": "No. 1 Party Anthem",
    "image": "images/music/song6.jpg",
    "album": "album",
    "artist": "artic monkeys",
    "year": 2020,
    "gender": "ELECTRONIC",
    "rating": 10,
    "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta minus rerum ratione, aliquid fugiat consectetur culpa, blanditiis sapiente recusandae suscipit exercitationem ullam ex unde assumenda. Dolorum dicta rerum voluptate ab!",
    "audio": "images/music/song6.mp3",
    "isFavorite": false,
    "isPlaying": false
},
{
    "id": "7",
    "name": "go go go",
    "image": "images/music/song7.jpg",
    "album": "album",
    "artist": "no me acuerdo",
    "year": 2020,
    "gender": "ELECTRONIC",
    "rating": 10,
    "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta minus rerum ratione, aliquid fugiat consectetur culpa, blanditiis sapiente recusandae suscipit exercitationem ullam ex unde assumenda. Dolorum dicta rerum voluptate ab!",
    "audio": "images/music/song7.mp4",
    "isFavorite": false,
    "isPlaying": false
}
  ]

@Component({
  selector: 'app-section-other',
  imports: [SvgPlayComponent, ScrollsCarouselDirective],
  templateUrl: './section-other.component.html',
  styleUrl: './section-other.component.css'
})
export class SectionOtherComponent {
  protected listMusic = listMusicData;
}
