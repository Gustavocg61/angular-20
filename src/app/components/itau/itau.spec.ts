import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItauComponent } from './itau';

describe('Itau', () => {
  let component: ItauComponent;
  let fixture: ComponentFixture<ItauComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItauComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
