import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionPlayListsComponent } from './section-play-lists.component';

describe('SectionPlayListsComponent', () => {
  let component: SectionPlayListsComponent;
  let fixture: ComponentFixture<SectionPlayListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionPlayListsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionPlayListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
