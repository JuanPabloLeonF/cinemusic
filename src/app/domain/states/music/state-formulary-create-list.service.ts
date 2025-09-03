import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { ListSongs } from '../../models/music/play-list';
import { MusicDataService } from '../../services/music/music-data-service.service';

@Injectable({
  providedIn: 'root'
})
export class StateFormularyCreateListService {

  private musicDataService: MusicDataService = inject(MusicDataService);
  public listsDataOfSongs: WritableSignal<ListSongs[]> = signal<ListSongs[]>([]);

  public createNewListSongs(listSongs: any): void {
    this.musicDataService.createNewListSongs(listSongs).subscribe({
      next: () => {
        this.musicDataService.getAllListSongs.refresh();
        console.log("data vuelta a traer: ", this.listsDataOfSongs());
      },
      error: (error) => {
        alert("Error al crear una lista de cancione nueva")
      }
    })
  }
}
