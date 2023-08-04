import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importa FormsModule aquí
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExerciseOneComponent } from './exercise-one/exercise-one.component';
import { ExerciseThreeComponent } from './exercise-three/exercise-three.component';
import { ExerciseTwoComponent } from './exercise-two/exercise-two.component';
import { FooterComponentComponent } from './footer-component/footer-component.component';
import { HeaderComponentComponent } from './header-component/header-component.component';

import { HttpClientModule } from '@angular/common/http';
import { DetailsComponentComponent } from './details-component/details-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ExerciseOneComponent,
    ExerciseTwoComponent,
    ExerciseThreeComponent,
    HeaderComponentComponent,
    FooterComponentComponent,
    DetailsComponentComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
