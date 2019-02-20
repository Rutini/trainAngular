import {Component, OnInit} from '@angular/core';
import {Train} from '../models/Train';
import {TrainService} from '../services/train.service';
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {Response} from '../models/Response';

@Component({
  selector: 'app-add-train',
  templateUrl: './add-train.component.html',
  styleUrls: ['./add-train.component.css']
})
export class AddTrainComponent implements OnInit {

  constructor(
    private trainService: TrainService,
    private location: Location,
    private route: ActivatedRoute
  ) {
  }

  train: Train;
  StationId: number;

  ngOnInit() {
    this.getStationId();
  }

  getStationId(): void {
    this.StationId = +this.route.snapshot.paramMap.get('id');
  }

  cancelClick(): void {
    this.location.back();
  }

  addTrain(addedTrain): void {
    this.train = addedTrain;
    this.train.station_id = this.StationId;
    console.log(this.train);
    this.trainService.addTrain(this.train)
      .subscribe((response: Response) => {
          console.log(response.message);
          this.location.back();
      });
  }

}
