import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QueryResponsiveService {
  private mediaQuery: MediaQueryList;
  public isMobile: WritableSignal<boolean> = signal<boolean>(false);

  constructor() {
    const mobileQuery = '(max-width: 768px)';

    this.mediaQuery = window.matchMedia(mobileQuery);
    this.isMobile.set(this.mediaQuery.matches);
    this.mediaQuery.addEventListener('change', (event: MediaQueryListEvent) => {
      this.isMobile.set(event.matches);
    });
  }
}