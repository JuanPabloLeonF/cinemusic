import { inject, Injectable } from '@angular/core';
import { MusicDataService } from '../../services/music/music-data-service.service';

@Injectable({
  providedIn: 'root'
})
export class StateFormularyCreateListService {

  private musicDataService: MusicDataService = inject(MusicDataService);

  public createNewListSongs(listSongs: any): void {
    this.musicDataService.createNewListSongs(listSongs).subscribe({
      next: () => {
        this.musicDataService.getAllListSongs.refresh();
      },
      error: (error) => {
        alert("Error al crear una lista de cancione nueva")
      }
    })
  }
}
