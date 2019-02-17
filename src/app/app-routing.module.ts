import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TrainsComponent} from './trains/trains.component';
import {TrainInfoComponent} from './train-info/train-info.component';

const routes: Routes = [
  {path: '', component: TrainsComponent},
  {path: 'trainInfo/:id', component: TrainInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
