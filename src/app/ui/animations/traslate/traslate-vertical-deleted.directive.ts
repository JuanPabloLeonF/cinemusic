import { Directive, ElementRef, inject, input, InputSignal, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { AnimationBuilder, AnimationPlayer, animate, style } from '@angular/animations';

@Directive({
  selector: '[appTraslateVerticalDeleted]',
  standalone: true
})
export class TraslateVerticalDeletedDirective implements OnChanges, OnDestroy {

  public appTraslateVerticalDeletedActivate: InputSignal<boolean> = input<boolean>(false);
  private elementRef = inject(ElementRef);
  private builder = inject(AnimationBuilder);
  private player: AnimationPlayer | undefined;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['appTraslateVerticalDeletedActivate']?.currentValue) {
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

    const animation = this.builder.build([
      style({ transform: 'translateX(0%)', opacity: 1 }),
      animate('0.4s ease-in-out', style({ transform: 'translateX(100%)', opacity: 0 }))
    ]);

    this.player = animation.create(this.elementRef.nativeElement);
    this.player.onDone(() => {
      this.stopAnimation();
      this.elementRef.nativeElement.remove();
    });

    this.player.play();
  }

  private stopAnimation(): void {
    if (this.player) {
      this.player.destroy();
      this.player = undefined;
    }
  }
}
