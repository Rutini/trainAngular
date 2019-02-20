import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { TrainsComponent } from './trains/trains.component';
import { TrainInfoComponent } from './train-info/train-info.component';
import { StationsComponent } from './stations/stations.component';
import {FormsModule} from '@angular/forms';
import { AddTrainComponent } from './add-train/add-train.component';
import {TrainService} from './services/train.service';
import {StationService} from './services/station.service';

@NgModule({
  declarations: [
    AppComponent,
    TrainsComponent,
    TrainInfoComponent,
    StationsComponent,
    AddTrainComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    TrainService,
    StationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
