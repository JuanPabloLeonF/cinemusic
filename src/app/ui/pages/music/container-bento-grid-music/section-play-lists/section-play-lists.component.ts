import { ChangeDetectionStrategy, Component, inject, WritableSignal } from '@angular/core';
import { SvgPlayListComponent } from "../../../../components/svg-play-list/svg-play-list.component";
import { SvgHeartComponent } from "../../../../components/svg-heart/svg-heart.component";
import { SvgNoteComponent } from "../../../../components/svg-note/svg-note.component";
import { StateMusicService } from '../../../../../domain/states/music/state-music.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-section-play-lists',
  imports: [SvgPlayListComponent, SvgHeartComponent, SvgNoteComponent, RouterModule],
  templateUrl: './section-play-lists.component.html',
  styleUrl: './section-play-lists.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SectionPlayListsComponent {
  protected stateMusicService: StateMusicService = inject(StateMusicService);
}
