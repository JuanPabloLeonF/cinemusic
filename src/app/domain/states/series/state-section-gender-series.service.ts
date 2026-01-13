import { Injectable, signal, WritableSignal } from '@angular/core';
import { Series } from '../../models/series/series';

@Injectable({
  providedIn: 'root'
})
export class StateSectionGenderSeriesService {

  public listSeriesData: WritableSignal<Series[]> = signal<Series[]>([]);
  public genderGlobal: WritableSignal<string> = signal<string>("");
  public listFilteredByGender: WritableSignal<Series[]> = signal<Series[]>(this.listSeriesData());

  public changeGenderGloabal(gender: string): void {
    this.genderGlobal.set(gender);
    this.getListFilteredByGender();
  }

  public getListFilteredByGender(): void {
      if (!this.genderGlobal() || !this.genderGlobal().trim()) {
        this.listFilteredByGender.set(this.listSeriesData());
        return;
      }

      const normalizedGender = this.genderGlobal()
        .toLowerCase()
        .normalize('NFD')
        .replace(/[^\u0000-\u007F]/g, '');

      this.listFilteredByGender.set(
        this.listSeriesData().filter(serie =>
          serie.gender
            .toLowerCase()
            .normalize('NFD')
            .replace(/[^\u0000-\u007F]/g, '')
            .includes(normalizedGender)
        )
      );
  }

  public getSelectedByGenderAndSearch(name: string): void {

    const normalizedGender = this.genderGlobal()
        .toLowerCase()
        .normalize('NFD')
        .replace(/[^\u0000-\u007F]/g, '');

    const normalizedSearch = name
        .toLowerCase()
        .normalize('NFD')
        .replace(/[^\u0000-\u007F]/g, '');

    const listaFilteredByGenderNew: Series[] = this.listSeriesData().filter(serie =>
        serie.gender
          .toLowerCase()
          .normalize('NFD')
          .replace(/[^\u0000-\u007F]/g, '')
          .includes(normalizedGender)
    )


    if (!this.genderGlobal() || !this.genderGlobal().trim() || !name || !name.trim()) {
      this.listFilteredByGender.set(listaFilteredByGenderNew);
      return;
    }

    this.listFilteredByGender.set(listaFilteredByGenderNew.filter( serie => 
      serie.name
        .toLowerCase()
        .normalize('NFD')
        .replace(/[^\u0000-\u007F]/g, '')
        .includes(normalizedSearch)
    ))
  }
}
