import {Component, OnInit} from '@angular/core';
import {Train} from '../models/Train';
import {TrainService} from '../services/train.service';
import {Response} from '../models/Response';
import {ActivatedRoute} from '@angular/router';
import {StationService} from '../services/station.service';
import {Station} from '../models/Station';

@Component({
  selector: 'app-trains',
  templateUrl: './trains.component.html',
  styleUrls: ['./trains.component.css']
})
export class TrainsComponent implements OnInit {

  constructor(
    private trainService: TrainService,
    private route: ActivatedRoute,
    private stationService: StationService
  ) {
  }

  trains: Train[];
  stationId;
  station: Station;

  ngOnInit() {
    this.getStationId();
    this.getStationInfo();
    this.getTrains();
  }

  getStationId(): void {
    this.stationId = +this.route.snapshot.paramMap.get('id');
  }

  getStationInfo(): void {
    this.stationService.getStationInfo(this.stationId)
      .subscribe((response: Response) => {
        if (response.success) {
          this.station = response.message;
        }
      });
  }

  getTrains(): void {
    this.trainService.getAllTrains(this.stationId)
      .subscribe((response: Response) => {
        if (response.success) {
          this.trains = response.message;
        }
      });
  }

  delete(train): void {
    const id = train.id;

    this.trainService.deleteTrain(id)
      .subscribe((response: Response) => {
        console.log(response.message);
        this.trains = this.trains.filter(t => t !== train);
      });
  }

}
