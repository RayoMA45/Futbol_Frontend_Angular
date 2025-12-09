import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Noticias } from './noticias';
import { Carousel } from './components/carousel/carousel';

describe('Noticias', () => {
  let component: Noticias;
  let fixture: ComponentFixture<Noticias>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Noticias, Carousel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Noticias);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
