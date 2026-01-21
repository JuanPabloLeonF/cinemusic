import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterUtilService {
  private router = inject(Router);

  constructor() {
  }

  public getRouterActuality(): string {
    return this.router.url;
  }
}
