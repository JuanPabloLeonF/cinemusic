import { Component, WritableSignal } from '@angular/core';
import { ButtonGenericComponent } from "../../../components/button-generic/button-generic.component";
import { ListSongs } from '../../../../domain/models/music/play-list';
import { SvgPlayComponent } from "../../../components/svg-play/svg-play.component";

@Component({
  selector: 'app-section-play-list-songs',
  imports: [ButtonGenericComponent, SvgPlayComponent],
  templateUrl: './section-play-list-songs.component.html',
  styleUrl: './section-play-list-songs.component.css'
})
export class SectionPLayListSongsComponent {
  protected listsListSongs: ListSongs[] = [
    {
        id: "1",
        name: "lista de metal",
        description: "listado de canciones de metal que me encantan",
        image: "images/music/metallica.jpg",
        durationList: "2h 12min",
        listSongs: [
            {
                id: "8",
                name: "nothing else matters",
                "image": "images/music/metallica.jpg",
                "album": "album",
                "artist": "metallica",
                "year": 2020,
                "gender": "METAL",
                "rating": 10,
                "description": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta minus rerum ratione, aliquid fugiat consectetur culpa, blanditiis sapiente recusandae suscipit exercitationem ullam ex unde assumenda. Dolorum dicta rerum voluptate ab!",
                "audio": "images/music/nothing.weba",
                "isFavorite": true,
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
    }
];
}
