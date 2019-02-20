import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TrainsComponent} from './trains/trains.component';
import {TrainInfoComponent} from './train-info/train-info.component';
import {StationsComponent} from './stations/stations.component';
import {AddTrainComponent} from './add-train/add-train.component';

const routes: Routes = [
  {path: '', component: StationsComponent},
  {path: 'station/:id', component: TrainsComponent},
  {path: 'trainInfo/:id', component: TrainInfoComponent},
  {path: 'station/:id/addTrain', component: AddTrainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
