import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionTrendsComponent } from './section-trends.component';

describe('SectionTrendsComponent', () => {
  let component: SectionTrendsComponent;
  let fixture: ComponentFixture<SectionTrendsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionTrendsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionTrendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
