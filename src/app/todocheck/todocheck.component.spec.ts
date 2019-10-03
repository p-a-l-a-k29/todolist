import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodocheckComponent } from './todocheck.component';

describe('TodocheckComponent', () => {
  let component: TodocheckComponent;
  let fixture: ComponentFixture<TodocheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodocheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodocheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
