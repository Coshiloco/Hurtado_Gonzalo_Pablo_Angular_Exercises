import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer-component',
  templateUrl: './footer-component.component.html',
  styleUrls: ['./footer-component.component.css', './footer.css'],
})
export class FooterComponentComponent {
  @Input() ulOne: string = 'ExerciseOne';
  @Input() ulTwo: string = 'ExerciseTwo';
  @Input() ulThree: string = 'ExerciseThree';
}
