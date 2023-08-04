import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css',
    './header.css',
    './hero.css',
    './footer.css',
  ],
})
export class AppComponent {
  title = 'Hurtado_Gonzalo_Pablo_Angular_Exercises';
  public menuOpen: Boolean = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
