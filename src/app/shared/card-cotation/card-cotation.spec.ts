import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCotation } from './card-cotation';

describe('CardCotation', () => {
  let component: CardCotation;
  let fixture: ComponentFixture<CardCotation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardCotation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardCotation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
