import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css'],
})
export class HeaderComponentComponent {
  public menuOpen: Boolean = false;
  @Input() menuTitle: string = 'ANGULAR EXERCISES';
  @Input() ExerciseOne: string = 'ExerciseOne';
  @Input() ExerciseTwo: string = 'ExerciseTwo';
  @Input() ExerciseThree: string = 'ExerciseThree';

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
