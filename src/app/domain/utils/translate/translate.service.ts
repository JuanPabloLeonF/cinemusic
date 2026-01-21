import { inject, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslateServiceUtils {

  public availableLanguages: any[] = [];
  public currentLanguage: string = "";
  public place: string = "";
  private translateServices: TranslateService = inject(TranslateService);

  constructor() {
    this.availableLanguages = this.translateServices.getLangs();
    this.currentLanguage = "es";
    this.place = "Colombia";
    this.availableLanguages = [
      {
        name: "es",
        label: "Español"
      },
      {
        name: "en",
        label: "English"
      },
      {
        name: "fr",
        label: "Français"
      }
    ];
  }

  public changeLanguage(language: string): void {
    this.translateServices.use(language);
    this.currentLanguage = language;
    this.place = "Colombia";
  }
}