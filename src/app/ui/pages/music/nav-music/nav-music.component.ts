import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-music',
  imports: [NgClass],
  templateUrl: './nav-music.component.html',
  styleUrl: './nav-music.component.css'
})
export class NavMusicComponent {
    protected typeSection: string = "songs";

    protected getOption(value: string): void {
      this.typeSection = value;
    }
}
