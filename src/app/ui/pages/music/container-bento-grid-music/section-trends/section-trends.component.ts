import { Component, inject } from '@angular/core';
import { SvgPlayComponent } from "../../../../components/svg-play/svg-play.component";
import { StateMusicService } from '../../../../../domain/states/music/state-music.service';
import { Gender } from '../../../../../domain/models/music/gender';
import { NumberAbbrevPipe } from '../../../../../domain/pipes/number-abbrev.pipe';

@Component({
  selector: 'app-section-trends',
  imports: [SvgPlayComponent, NumberAbbrevPipe],
  templateUrl: './section-trends.component.html',
  styleUrl: './section-trends.component.css'
})
export class SectionTrendsComponent {
  private stateMusicService: StateMusicService = inject(StateMusicService);
  protected selectedGender: Gender = this.stateMusicService.stateSectionTrendsService.getSelectedGender();
}
