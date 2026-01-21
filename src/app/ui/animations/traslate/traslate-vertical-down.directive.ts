import { animate, AnimationBuilder, AnimationPlayer, style } from '@angular/animations';
import {
  Directive,
  effect,
  ElementRef,
  inject,
  input,
  InputSignal,
  OnChanges,
  OnDestroy,
  SimpleChanges
} from '@angular/core';
import { QueryResponsiveService } from '../../../domain/utils/common/query-responsive.service';

@Directive({
  selector: '[appTraslateVerticalDown]'
})
export class TraslateVerticalDownDirective implements OnChanges, OnDestroy {

  public appTraslateVerticalDownActivate: InputSignal<boolean> = input<boolean>(false);

  private elementRef: ElementRef = inject(ElementRef);
  private builder: AnimationBuilder = inject(AnimationBuilder);
  private player: AnimationPlayer | undefined;
  private queryResponsiveService: QueryResponsiveService = inject(QueryResponsiveService);

  private fullWidth = '50px';
  private fullHeight = '40%';

  constructor() {
    effect(() => {
      if (this.queryResponsiveService.isMobile()) {
        this.playAnimation();
      } else {
        this.stopAnimation();
      }
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['appTraslateVerticalDownActivate']) {
      this.playAnimation();
    }
  }

  ngOnDestroy(): void {
    this.stopAnimation();
  }

  private playAnimation(): void {
    if (this.player) {
      this.player.destroy();
    }
  
    const isVisible = this.appTraslateVerticalDownActivate();
  
    if (!isVisible) {
      const nativeEl = this.elementRef.nativeElement as HTMLElement;
      nativeEl.style.width = this.fullWidth;
      nativeEl.style.height = this.fullHeight;
      nativeEl.style.overflow = 'hidden';
  
      setTimeout(() => {
        const animation = this.builder.build([
          style({
            width: this.fullWidth,
            height: this.fullHeight,
            overflow: 'hidden'
          }),
          animate('0.3s ease-in-out', style({
            width: '0%',
            height: '0%',
            overflow: 'hidden'
          }))
        ]);
  
        this.player = animation.create(nativeEl);
        this.player.play();
      }, 0);
  
    } else {
      const animation = this.builder.build([
        style({
          width: '0%',
          height: '0%',
          overflow: 'hidden'
        }),
        animate('0.3s ease-in-out', style({
          width: this.fullWidth,
          height: this.fullHeight,
          overflow: 'hidden'
        }))
      ]);
  
      this.player = animation.create(this.elementRef.nativeElement);
      this.player.play();
    }
  }
  

  private stopAnimation(): void {
    if (this.player) {
      this.player.destroy();
      this.player = undefined;
    }
  }
}

