import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePizzaComponent } from './update-pizza.component';

describe('UpdatePizzaComponent', () => {
  let component: UpdatePizzaComponent;
  let fixture: ComponentFixture<UpdatePizzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePizzaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
