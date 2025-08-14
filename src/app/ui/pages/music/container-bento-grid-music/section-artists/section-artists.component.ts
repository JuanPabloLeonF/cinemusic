import { Component } from '@angular/core';
import { ButtonGenericComponent } from "../../../../components/button-generic/button-generic.component";
import { SvgStartComponent } from "../../../../components/svg-start/svg-start.component";

@Component({
  selector: 'app-section-artists',
  imports: [ButtonGenericComponent, SvgStartComponent],
  templateUrl: './section-artists.component.html',
  styleUrl: './section-artists.component.css'
})
export class SectionArtistsComponent {

}
