import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarMainComponent } from "./ui/layouts/nav-bar-main/nav-bar-main.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBarMainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
