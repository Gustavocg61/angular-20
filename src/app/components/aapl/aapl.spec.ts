import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aapl } from './aapl';

describe('Aapl', () => {
  let component: Aapl;
  let fixture: ComponentFixture<Aapl>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Aapl]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aapl);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
