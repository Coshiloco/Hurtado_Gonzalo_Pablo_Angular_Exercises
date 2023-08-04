import { Component, OnInit } from '@angular/core';
import { HeaderServiceService } from '../header-service.service';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css'],
})
export class HeaderComponentComponent implements OnInit {
  public menuOpen: Boolean = false;
  menuTitle: string = 'ANGULAR EXERCISES';
  ExerciseOne: string = 'ExerciseOne';
  ExerciseTwo: string = 'ExerciseTwo';
  ExerciseThree: string = 'ExerciseThree';

  constructor(private headerService: HeaderServiceService) {}

  ngOnInit() {
    this.headerService.currentMenuTitle.subscribe(
      (title) => (this.menuTitle = title)
    );
    this.headerService.currentExerciseOne.subscribe(
      (exercise) => (this.ExerciseOne = exercise)
    );
    this.headerService.currentExerciseTwo.subscribe(
      (exercise) => (this.ExerciseTwo = exercise)
    );
    this.headerService.currentExerciseThree.subscribe(
      (exercise) => (this.ExerciseThree = exercise)
    );
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
