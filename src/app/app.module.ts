import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { TrainsComponent } from './trains/trains.component';
import { TrainInfoComponent } from './train-info/train-info.component';
import { StationsComponent } from './stations/stations.component';

@NgModule({
  declarations: [
    AppComponent,
    TrainsComponent,
    TrainInfoComponent,
    StationsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
