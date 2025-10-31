import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vale } from './vale';

describe('Vale', () => {
  let component: Vale;
  let fixture: ComponentFixture<Vale>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Vale]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Vale);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
