import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteComponent } from './teste';

describe('Teste', () => {
  let component: TesteComponent;
  let fixture: ComponentFixture<TesteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TesteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
