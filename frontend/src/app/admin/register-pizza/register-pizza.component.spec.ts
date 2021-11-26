import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterPizzaComponent } from './register-pizza.component';

describe('RegisterPizzaComponent', () => {
  let component: RegisterPizzaComponent;
  let fixture: ComponentFixture<RegisterPizzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterPizzaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterPizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
