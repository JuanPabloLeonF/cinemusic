import { Injectable, signal, WritableSignal } from '@angular/core';
import { Gender } from '../../models/music/gender';

@Injectable({
  providedIn: 'root'
})
export class StateSectionTrendsService {

  private selectedGender: WritableSignal<Gender> = signal<Gender>({} as Gender); 

  public setSelectedGender(selectedGender: Gender) {
    this.selectedGender.set(selectedGender);
  }

  public getSelectedGender(): Gender {
    return this.selectedGender();
  }
}
