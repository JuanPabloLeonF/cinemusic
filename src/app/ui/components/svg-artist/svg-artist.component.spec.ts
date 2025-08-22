import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgArtistComponent } from './svg-artist.component';

describe('SvgArtistComponent', () => {
  let component: SvgArtistComponent;
  let fixture: ComponentFixture<SvgArtistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SvgArtistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SvgArtistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
