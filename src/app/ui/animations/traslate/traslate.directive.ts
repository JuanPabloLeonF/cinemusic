import { Directive, ElementRef, inject, input, InputSignal, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appTraslate]'
})
export class TraslateDirective implements OnInit, OnChanges, OnDestroy {

  public elementRef: ElementRef = inject(ElementRef);
  public appTraslateActive: InputSignal<boolean> = input<boolean>(false);

  private elementWidth = 0;

  ngOnInit(): void {
    this.applyAnimation();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['appTraslateActive']) {
      this.applyAnimation();
    }
  }

  ngOnDestroy(): void {
    this.stopAnimation();
  }

  private applyAnimation(): void {
    const element = this.elementRef.nativeElement as HTMLElement;
    setTimeout(() => {
      this.getDimensions(); 
      if (this.appTraslateActive()) {
        element.style.transform = `translateX(0px)`;
      } else {
        element.style.transform = `translateX(-${this.elementWidth}px)`;
      }
      element.style.transition = 'transform 0.3s ease-in-out';
    }, 0);
  }

  private stopAnimation(): void {
    const element = this.elementRef.nativeElement as HTMLElement;
    element.style.transform = `translateX(0px)`;
    element.style.transition = 'none'; 
  }

  private getDimensions(): void {
    const element = this.elementRef.nativeElement as HTMLElement;
    this.elementWidth = element.offsetWidth;
  }
}