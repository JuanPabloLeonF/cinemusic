import { Directive, ElementRef, inject, input, InputSignal, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { AnimationBuilder, AnimationPlayer, animate, style } from '@angular/animations';

@Directive({
  selector: '[appTraslate]',
  standalone: true
})
export class TraslateDirective implements OnChanges, OnDestroy {

 public appTraslateActive: InputSignal<boolean> = input<boolean>(false);
 private elementRef: ElementRef = inject(ElementRef);
 private builder: AnimationBuilder = inject(AnimationBuilder);
 private player: AnimationPlayer | undefined;

 ngOnChanges(changes: SimpleChanges): void {
  if (changes['appTraslateActive']) {
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

  const isVisible = this.appTraslateActive();
  const startPosition = isVisible ? 'translateX(-100%)' : 'translateX(0%)';
  const endPosition = isVisible ? 'translateX(0%)' : 'translateX(-100%)';

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