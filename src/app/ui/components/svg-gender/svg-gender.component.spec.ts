import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgGenderComponent } from './svg-gender.component';

describe('SvgGenderComponent', () => {
  let component: SvgGenderComponent;
  let fixture: ComponentFixture<SvgGenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SvgGenderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SvgGenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
