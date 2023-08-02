import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseFourComponent } from './exercise-four.component';

describe('ExerciseFourComponent', () => {
  let component: ExerciseFourComponent;
  let fixture: ComponentFixture<ExerciseFourComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExerciseFourComponent]
    });
    fixture = TestBed.createComponent(ExerciseFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
