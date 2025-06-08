import { animate, AnimationBuilder, AnimationPlayer, style } from '@angular/animations';
import { Directive, ElementRef, inject, OnDestroy, OnInit } from '@angular/core';

@Directive({
  selector: '[appWobble]'
})
export class WobbleDirective implements OnInit, OnDestroy {

  public elementRef: ElementRef = inject(ElementRef);
  private builderAnimation: AnimationBuilder = inject(AnimationBuilder);
  private player: AnimationPlayer = {} as AnimationPlayer;

  ngOnInit(): void {
    this.playLoop();
  }

  ngOnDestroy(): void {
    this.stopAnimation();
  }

  private playLoop(): void {
    const animation = this.builderAnimation.build([
      style({ transform: 'translate(0px, 0px)', zIndex: 0 }),
      animate('0.5s ease-in-out', style({ transform: 'translate(-2px, -2px)' })),
      animate('0.5s ease-in-out', style({ transform: 'translate(2px, -2px)' })),
      animate('0.5s ease-in-out', style({ transform: 'translate(-2px, 2px)' })),
      animate('0.5s ease-in-out', style({ transform: 'translate(2px, 2px)' })),
      animate('0.5s ease-in-out', style({ transform: 'translate(0px, 0px)' })),
    ]);

    const playLoop = () => {
      this.player = animation.create(this.elementRef.nativeElement);
      this.player.play();
      this.player.onDone(() => {
        this.player.destroy();
        playLoop();
      })
    }
    playLoop();
  }

  private stopAnimation(): void {
    this.player.pause();
    this.player.destroy();
  }

}
