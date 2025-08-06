import { Directive, ElementRef, inject, input, InputSignal, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appTraslateVertical]'
})
export class TraslateVerticalDirective implements OnInit, OnChanges, OnDestroy {

  public elementRef: ElementRef = inject(ElementRef);
  public appTraslateVerticalActivate: InputSignal<boolean> = input<boolean>(false);

  private elementWidth = 0;

  ngOnInit(): void {
    this.applyAnimation();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['appTraslateVerticalActivate']) {
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
      if (this.appTraslateVerticalActivate()) {
        element.style.transform = `translateY(0%)`;
      } else {
        element.style.transform = `translateY(${95}%)`;
      }
      element.style.transition = 'transform 0.3s ease-in-out';
    }, 0);
  }

  private stopAnimation(): void {
    const element = this.elementRef.nativeElement as HTMLElement;
    element.style.transform = `translateY(0px)`;
    element.style.transition = 'none'; 
  }

  private getDimensions(): void {
    const element = this.elementRef.nativeElement as HTMLElement;
    this.elementWidth = element.offsetWidth;
  }
}