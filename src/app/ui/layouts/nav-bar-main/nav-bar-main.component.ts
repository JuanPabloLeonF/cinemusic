import { ChangeDetectionStrategy, Component, inject} from '@angular/core';
import { RouterModule } from '@angular/router';
import { TraslateDirective } from '../../animations/traslate/traslate.directive';
import { StatesNavbarMainService } from '../../../domain/states/states-navbar-main.service';
import { NgOptimizedImage, NgStyle } from '@angular/common';
import { RouterUtilService } from '../../../domain/utils/common/router-util.service';

@Component({
  selector: 'app-nav-bar-main',
  imports: [NgOptimizedImage, RouterModule, TraslateDirective, NgStyle],
  templateUrl: './nav-bar-main.component.html',
  styleUrl: './nav-bar-main.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavBarMainComponent {
  protected stateNavBarMainService: StatesNavbarMainService = inject(StatesNavbarMainService);
  protected routerUtilService: RouterUtilService = inject(RouterUtilService);
}
