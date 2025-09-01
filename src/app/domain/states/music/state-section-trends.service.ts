import { Injectable, signal, WritableSignal } from '@angular/core';
import { Gender } from '../../models/music/gender';

@Injectable({
  providedIn: 'root'
})
export class StateSectionTrendsService {
  public selectedGender: WritableSignal<Gender> = signal<Gender>({} as Gender); 
}
