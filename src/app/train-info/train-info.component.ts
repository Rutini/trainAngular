import {Component, OnInit} from '@angular/core';
import {Train} from '../models/Train';
import {TrainService} from '../services/train.service';
import {ActivatedRoute} from '@angular/router';
import {Response} from '../models/Response';
import {Location} from '@angular/common';

@Component({
  selector: 'app-train-info',
  templateUrl: './train-info.component.html',
  styleUrls: ['./train-info.component.css']
})
export class TrainInfoComponent implements OnInit {

  constructor(
    private trainService: TrainService,
    private route: ActivatedRoute,
    private location: Location
  ) {
  }

  train: Train;
  newTrain: Train;
  updateSelected = false;
  id: number;

  ngOnInit() {
    this.getTrain();
  }

  goBack(): void {
    this.location.back();
  }

  getTrain(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.trainService.getTrainInfo(this.id)
      .subscribe((response: Response) => {
        this.train = response.message;
        this.newTrain = JSON.parse(JSON.stringify(this.train));
      });
  }

  cancelClick(): void {
    this.updateSelected = !this.updateSelected;
    this.newTrain = JSON.parse(JSON.stringify(this.train));
  }

  updateClick(): void {
    this.updateSelected = !this.updateSelected;
  }

  updateTrain(): void {
    this.train = JSON.parse(JSON.stringify(this.newTrain));
    this.trainService.updateTrain(this.id, this.train)
      .subscribe((response: Response) => {
          console.log(response.message);
      });
    this.updateSelected = !this.updateSelected;
  }

}
