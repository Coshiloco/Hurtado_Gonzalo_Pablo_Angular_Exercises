import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeaderServiceService {
  private menuTitle = new BehaviorSubject('ANGULAR EXERCISES');
  currentMenuTitle = this.menuTitle.asObservable();

  private ExerciseOne = new BehaviorSubject('ExerciseOne');
  currentExerciseOne = this.ExerciseOne.asObservable();

  private ExerciseTwo = new BehaviorSubject('ExerciseTwo');
  currentExerciseTwo = this.ExerciseTwo.asObservable();

  private ExerciseThree = new BehaviorSubject('ExerciseThree');
  currentExerciseThree = this.ExerciseThree.asObservable();

  constructor() {}

  changeMenuTitle(title: string) {
    this.menuTitle.next(title);
  }

  changeExerciseOne(exercise: string) {
    this.ExerciseOne.next(exercise);
  }

  changeExerciseTwo(exercise: string) {
    this.ExerciseTwo.next(exercise);
  }

  changeExerciseThree(exercise: string) {
    this.ExerciseThree.next(exercise);
  }
}
