import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPizzaComponent } from './list-pizza.component';

describe('ListPizzaComponent', () => {
  let component: ListPizzaComponent;
  let fixture: ComponentFixture<ListPizzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPizzaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
