import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionOtherComponent } from './section-other.component';

describe('SectionOtherComponent', () => {
  let component: SectionOtherComponent;
  let fixture: ComponentFixture<SectionOtherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionOtherComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionOtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
