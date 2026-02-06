import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SectionMainMusicComponent } from './section-main-music/section-main-music.component';
import { ContainerBentoGridMusicComponent } from "./container-bento-grid-music/container-bento-grid-music.component";
import { StateMusicService } from '../../../domain/states/music/state-music.service';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  imports: [
    SectionMainMusicComponent,
    ContainerBentoGridMusicComponent,
    RouterOutlet,
],
  templateUrl: './music.component.html',
  styleUrl: './music.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MusicComponent {
  protected stateMusicService: StateMusicService = inject(StateMusicService);
  protected router = inject(Router);
}
