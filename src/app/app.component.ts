import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { TranslateServiceUtils } from './domain/services/translate.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TranslatePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  protected translateServicesUtils:TranslateServiceUtils = inject(TranslateServiceUtils);

  ngOnInit(): void {
    this.translateServicesUtils.changeLanguage("es");
  }
}
