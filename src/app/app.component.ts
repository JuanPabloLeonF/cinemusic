import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarMainComponent } from "./ui/layouts/nav-bar-main/nav-bar-main.component";
import { StatesNavbarMainService } from './domain/states/states-navbar-main.service';
import { MusicPlayerComponent } from "./ui/pages/music/music-player/music-player.component";
import { NgStyle } from '@angular/common';
import { StateMusicService } from './domain/states/music/state-music.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBarMainComponent, MusicPlayerComponent, NgStyle],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  protected stateMusic: StateMusicService = inject(StateMusicService);
  protected stateNavBarMainService: StatesNavbarMainService = inject(StatesNavbarMainService);
}
