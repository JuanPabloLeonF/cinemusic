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

  private scrollTimeoutId: any;
  private scrollDirection: 'right' | 'left' = 'right';

  private delayPerItem = 5000;
  
  constructor() {
    effect(() => {
      this.isMobile = this.queryResponsiveService.isMobile();
    });
  }

  ngOnInit(): void {
    const element = this.elementRef.nativeElement as HTMLElement;
    this.renderer.setStyle(element, 'overflowX', this.isMobile ? 'auto' : 'hidden');
    this.startAutoScroll(element);
  }

  ngOnDestroy(): void {
    if (this.scrollTimeoutId) {
      clearTimeout(this.scrollTimeoutId);
    }
  }

  private startAutoScroll(container: HTMLElement): void {
    const step = () => {
      const itemWidth = container.clientWidth;
      const maxScrollLeft = container.scrollWidth - container.clientWidth;

      if (this.scrollDirection === 'right') {
        container.scrollBy({ left: itemWidth, behavior: 'smooth' });

        if (container.scrollLeft + itemWidth >= maxScrollLeft) {
          this.scrollDirection = 'left';
        }
      } else {
        container.scrollBy({ left: -itemWidth, behavior: 'smooth' });

        if (container.scrollLeft - itemWidth <= 0) {
          this.scrollDirection = 'right';
        }
      }

      this.scrollTimeoutId = setTimeout(step, this.delayPerItem);
    };

    this.scrollTimeoutId = setTimeout(step, this.delayPerItem);
  }
}
