import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './sections/header.css'],
})
export class AppComponent {
  title = 'Hurtado_Gonzalo_Pablo_Angular_Exercises';
  public menuOpen: Boolean = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
