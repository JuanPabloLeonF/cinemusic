import { animate, AnimationBuilder, AnimationPlayer, style } from '@angular/animations';
import { Directive, effect, ElementRef, inject, input, InputSignal, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { QueryResponsiveService } from '../../../domain/utils/common/query-responsive.service';

@Directive({
  selector: '[appTraslateVertical]'
})
export class TraslateVerticalDirective implements OnChanges, OnDestroy {

  public appTraslateVerticalActivate: InputSignal<boolean> = input<boolean>(false);
 private elementRef: ElementRef = inject(ElementRef);
 private builder: AnimationBuilder = inject(AnimationBuilder);
 private player: AnimationPlayer | undefined;
 private queryResponsiveService: QueryResponsiveService = inject(QueryResponsiveService);
 
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
  if (changes['appTraslateVerticalActivate']) {
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

    const isVisible = this.appTraslateVerticalActivate();
    const startPosition = isVisible ? 'translateY(95%)' : 'translateY(0%)';
    const endPosition = isVisible ? 'translateY(0%)' : 'translateY(95%)';

    const animation = this.builder.build([
      style({ transform: startPosition }),
      animate('0.3s ease-in-out', style({ transform: endPosition }))
    ]);

    this.player = animation.create(this.elementRef.nativeElement);
      this.player.play();
  }

  private stopAnimation(): void {
    if (this.player) {
      this.player.destroy();
      this.player = undefined;
    }
  }
}