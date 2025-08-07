import { Directive, ElementRef, Renderer2, OnInit, OnDestroy, inject, effect } from '@angular/core';
import { QueryResponsiveService } from '../../../domain/services/query-responsive.service';

@Directive({
  selector: '[appScrollReveal]'
})
export class ScrollRevealDirective implements OnInit, OnDestroy {

  private observer!: IntersectionObserver;
  public elementRef: ElementRef = inject(ElementRef); 
  private renderer: Renderer2 = inject(Renderer2);
  private queryResponsiveService: QueryResponsiveService = inject(QueryResponsiveService);
  private threshold = 0.9;
   
  constructor() {
    effect(() => {
      if (this.queryResponsiveService.isMobile()) {
        this.threshold = 0.9
      } else {
        this.threshold = 0.2
      }
    });
  }

  ngOnInit(): void {
    const element = this.elementRef.nativeElement;

    this.renderer.setStyle(element, 'opacity', '0');
    this.renderer.setStyle(element, 'transform', 'scale(0.4)');
    this.renderer.setStyle(element, 'transition', 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out');

    let isVisible = false;

  this.observer = new IntersectionObserver(
    ([entry]) => {
      const ratio = entry.intersectionRatio;
      if (ratio >= this.threshold && !isVisible) {
        isVisible = true;
        this.renderer.setStyle(element, 'opacity', '1');
        this.renderer.setStyle(element, 'transform', 'scale(1)'); 
      } else if (ratio < this.threshold && isVisible) {
        isVisible = false;
        this.renderer.setStyle(element, 'opacity', '0');
        this.renderer.setStyle(element, 'transform', 'scale(0.4)');
      }
    },
    {
      threshold: Array.from({ length: 11 }, (_, i) => i * 0.1)
    }
  );

    this.observer.observe(element);
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
