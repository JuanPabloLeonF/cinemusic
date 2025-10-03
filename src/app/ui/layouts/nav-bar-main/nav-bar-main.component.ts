import { Component, inject, input, InputSignal, output, OutputEmitterRef } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { TraslateDirective } from '../../animations/traslate/traslate.directive';
import { StatesNavbarMainService } from '../../../domain/states/states-navbar-main.service';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-nav-bar-main',
  imports: [RouterModule, TraslateDirective, NgStyle],
  templateUrl: './nav-bar-main.component.html',
  styleUrl: './nav-bar-main.component.css'
})
export class NavBarMainComponent {

  protected stateNavBarMainService: StatesNavbarMainService = inject(StatesNavbarMainService);
  protected router = inject(Router);
 }
