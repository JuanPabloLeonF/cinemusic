import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarMainComponent } from "./ui/layouts/nav-bar-main/nav-bar-main.component";
import { StatesNavbarMainService } from './domain/states/states-navbar-main.service';
import { MusicPlayerComponent } from "./ui/pages/music/music-player/music-player.component";
import { NgStyle } from '@angular/common';
import { StateMusicService } from './domain/states/music/state-music.service';
import { RouterUtilService } from './domain/utils/common/router-util.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBarMainComponent, MusicPlayerComponent, NgStyle],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {

  protected routerUtilService: RouterUtilService = inject(RouterUtilService);
  protected stateMusic: StateMusicService = inject(StateMusicService);
  protected stateNavBarMainService: StatesNavbarMainService = inject(StatesNavbarMainService);
}
