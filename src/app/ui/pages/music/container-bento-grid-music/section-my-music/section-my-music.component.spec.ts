import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionMyMusicComponent } from './section-my-music.component';

describe('SectionMyMusicComponent', () => {
  let component: SectionMyMusicComponent;
  let fixture: ComponentFixture<SectionMyMusicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionMyMusicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionMyMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
