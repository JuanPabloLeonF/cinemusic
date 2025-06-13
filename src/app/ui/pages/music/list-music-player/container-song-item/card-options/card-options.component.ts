import { Component, output, OutputEmitterRef } from '@angular/core';
import { CardOptionsConst } from '../../../../../../domain/models/music/songs';

@Component({
  selector: 'app-card-options',
  imports: [],
  templateUrl: './card-options.component.html',
  styleUrl: './card-options.component.css'
})
export class CardOptionsComponent {

  public ouputOptionCard: OutputEmitterRef<string> = output<string>();

  protected shareSong(): void {
    this.ouputOptionCard.emit(CardOptionsConst.SHARE);
  }

  protected addToFavorites(): void {
    this.ouputOptionCard.emit(CardOptionsConst.FAVORITE);
  }

  protected addToPlaylist(): void {
    this.ouputOptionCard.emit(CardOptionsConst.PLAYLIST);
  }

  protected deleteSong(): void {
    this.ouputOptionCard.emit(CardOptionsConst.DELETE);
  }

}

