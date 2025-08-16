import { Component } from '@angular/core';
import { SvgPlayListComponent } from "../../../../components/svg-play-list/svg-play-list.component";
import { SvgHeartComponent } from "../../../../components/svg-heart/svg-heart.component";
import { SvgNoteComponent } from "../../../../components/svg-note/svg-note.component";

@Component({
  selector: 'app-section-play-lists',
  imports: [SvgPlayListComponent, SvgHeartComponent, SvgNoteComponent],
  templateUrl: './section-play-lists.component.html',
  styleUrl: './section-play-lists.component.css'
})
export class SectionPlayListsComponent {

}
