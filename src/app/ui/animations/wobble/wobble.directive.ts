import { Directive, ElementRef, inject, OnDestroy, OnInit, OnChanges, SimpleChanges, input, InputSignal } from '@angular/core';

@Directive({
  selector: '[appWobble]'
})
export class WobbleDirective implements OnInit, OnDestroy, OnChanges {

  public elementRef: ElementRef = inject(ElementRef);
  private animationFrameId: number = 0;

  private posX = 0;
  private posY = 0;
  private velX = 2;
  private velY = 2;

  private elementWidth = 0;
  private elementHeight = 0;
  private containerWidth = 0;
  private containerHeight = 0;

  public appWobbleActive: InputSignal<boolean> = input<boolean>(false);

  ngOnInit(): void {
    const element = this.elementRef.nativeElement as HTMLElement;
    element.style.position = 'absolute'; 
    setTimeout(() => {
      this.getDimensions();
      if (this.appWobbleActive()) {
        this.startBounceAnimation();
      } else {
        element.style.transform = `translate(0px, 0px)`;
      }
    }, 0);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['appWobbleActive']) {
      const isActive = changes['appWobbleActive'].currentValue;
      if (isActive) {
        this.stopAnimation(); 
        this.getDimensions();
        this.startBounceAnimation();
      } else {
        this.stopAnimation(); 
        (this.elementRef.nativeElement as HTMLElement).style.transform = 'translate(0px, 0px)';
      }
    }
  }

  ngOnDestroy(): void {
    this.stopAnimation();
  }

  private getDimensions(): void {
    const element = this.elementRef.nativeElement as HTMLElement;
    this.elementWidth = element.offsetWidth;
    this.elementHeight = element.offsetHeight;

    const container = element.parentElement as HTMLElement;
    if (container) {
      this.containerWidth = container.offsetWidth;
      this.containerHeight = container.offsetHeight;
      this.posX = (this.containerWidth - this.elementWidth) / 2;
      this.posY = (this.containerHeight - this.elementHeight) / 2;
    } else {
      console.warn("El elemento appWobble no tiene un contenedor padre para rebotar.");
      this.containerWidth = 0;
      this.containerHeight = 0;
    }
  }

  private startBounceAnimation(): void {
    if (this.containerWidth <= 0 || this.containerHeight <= 0) {
        console.warn("No se puede iniciar la animación de rebote: dimensiones de contenedor no válidas.");
        return;
    }

    const element = this.elementRef.nativeElement as HTMLElement;

    this.posX = Math.max(0, Math.min(this.posX, this.containerWidth - this.elementWidth));
    this.posY = Math.max(0, Math.min(this.posY, this.containerHeight - this.elementHeight));
    element.style.transform = `translate(${this.posX}px, ${this.posY}px)`;
    this.velX = 1;
    this.velY = 1;

    const animateBounce = () => {
      this.posX += this.velX;
      this.posY += this.velY;

      if (this.posX + this.elementWidth > this.containerWidth) {
        this.posX = this.containerWidth - this.elementWidth; 
        this.velX *= -1;
      } else if (this.posX < 0) {
        this.posX = 0; 
        this.velX *= -1;
      }

      if (this.posY + this.elementHeight > this.containerHeight) {
        this.posY = this.containerHeight - this.elementHeight; 
        this.velY *= -1;
      } else if (this.posY < 0) {
        this.posY = 0; 
        this.velY *= -1;
      }

      element.style.transform = `translate(${this.posX}px, ${this.posY}px)`;

      this.animationFrameId = requestAnimationFrame(animateBounce);
    };

    this.animationFrameId = requestAnimationFrame(animateBounce);
  }

  private stopAnimation(): void {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = 0; 
    }
  }
}