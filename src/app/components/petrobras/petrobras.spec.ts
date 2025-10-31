import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Petrobras } from './petrobras';

describe('Petrobras', () => {
  let component: Petrobras;
  let fixture: ComponentFixture<Petrobras>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Petrobras]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Petrobras);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
