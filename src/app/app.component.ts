import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarMainComponent } from "./ui/layouts/nav-bar-main/nav-bar-main.component";
import { StatesNavbarMainService } from './domain/states/states-navbar-main.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBarMainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  protected stateNavBarMainService: StatesNavbarMainService = inject(StatesNavbarMainService);
}
