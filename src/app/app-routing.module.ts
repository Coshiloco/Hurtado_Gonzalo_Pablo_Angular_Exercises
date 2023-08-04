import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExerciseOneComponent } from './exercise-one/exercise-one.component';
import { ExerciseThreeComponent } from './exercise-three/exercise-three.component';
import { ExerciseTwoComponent } from './exercise-two/exercise-two.component';

const routes: Routes = [
  { path: '', component: ExerciseOneComponent },
  { path: 'exercise-one', component: ExerciseOneComponent },
  { path: 'exercise-one', component: ExerciseTwoComponent },
  { path: 'exercise-one', component: ExerciseThreeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
