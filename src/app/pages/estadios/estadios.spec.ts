import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Estadios } from './estadios';

describe('Estadios', () => {
  let component: Estadios;
  let fixture: ComponentFixture<Estadios>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Estadios]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Estadios);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
