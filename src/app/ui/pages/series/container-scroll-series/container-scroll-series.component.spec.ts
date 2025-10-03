import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerScrollSeriesComponent } from './container-scroll-series.component';

describe('ContainerScrollSeriesComponent', () => {
  let component: ContainerScrollSeriesComponent;
  let fixture: ComponentFixture<ContainerScrollSeriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContainerScrollSeriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerScrollSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
