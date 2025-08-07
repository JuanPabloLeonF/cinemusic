import { Directive, ElementRef, inject, Renderer2, OnInit, OnDestroy, effect } from '@angular/core';
import { QueryResponsiveService } from '../../../domain/services/query-responsive.service';

@Directive({
  selector: '[appScrollsCarousel]'
})
export class ScrollsCarouselDirective implements OnInit, OnDestroy {
  private elementRef: ElementRef = inject(ElementRef);
  private renderer: Renderer2 = inject(Renderer2);
  private queryResponsiveService: QueryResponsiveService = inject(QueryResponsiveService);
  private isMobile = false;

  private scrollIntervalId: any;
  private scrollDirection: 'right' | 'left' = 'right';
  private scrollAmount = 1.5;
  private frameRate = 15;

  constructor() {
    effect(() => {
      this.isMobile = this.queryResponsiveService.isMobile();
    });
  }

  ngOnInit(): void {
    const element = this.elementRef.nativeElement as HTMLElement;
    this.renderer.setStyle(element, 'overflowX', this.isMobile ? 'auto' : 'hidden');
    this.renderer.setStyle(element, 'scrollBehavior', 'smooth');
    this.startAutoScroll(element);
  }

  ngOnDestroy(): void {
    if (this.scrollIntervalId) {
      clearInterval(this.scrollIntervalId);
    }
  }

  private startAutoScroll(container: HTMLElement): void {
    let lastScrollLeft = container.scrollLeft;

    this.scrollIntervalId = setInterval(() => {
      const maxScrollLeft = container.scrollWidth - container.clientWidth;

      if (this.scrollDirection === 'right') {
        container.scrollLeft += this.scrollAmount;
        if (container.scrollLeft >= maxScrollLeft) {
          this.scrollDirection = 'left';
        }
      } else {
        container.scrollLeft -= this.scrollAmount;
        if (container.scrollLeft <= 0) {
          this.scrollDirection = 'right';
        }
      }

      if (this.isMobile) {
        if (Math.abs(container.scrollLeft - lastScrollLeft) > this.scrollAmount + 1) {
          clearInterval(this.scrollIntervalId);
          setTimeout(() => {
            this.scrollDirection = 'right';
            this.startAutoScroll(container);
          }, 3000);
        }
        lastScrollLeft = container.scrollLeft;
      }
    }, this.frameRate);
  }
}
