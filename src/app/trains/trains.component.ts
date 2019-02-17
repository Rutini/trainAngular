import {Component, OnInit} from '@angular/core';
import {Train} from '../models/Train';
import {TrainService} from '../services/train.service';
import {Response} from '../models/Response';

@Component({
  selector: 'app-trains',
  templateUrl: './trains.component.html',
  styleUrls: ['./trains.component.css']
})
export class TrainsComponent implements OnInit {

  constructor(
    private trainService: TrainService
  ) {
  }

  trains: Train[];
  train: Train;
  isSelected = false;

  ngOnInit() {
    this.getTrains();
  }

  selectTrain() {
    this.isSelected = !this.isSelected;
  }

  getTrain(id: number) {
    this.trainService.getTrainInfo(id)
      .subscribe((response: Response) => {
        if (response.success) {
          this.train = response.message;
        }
      });
  }

  getTrains() {
    this.trainService.getAllTrains()
      .subscribe((response: Response) => {
        if (response.success) {
          this.trains = response.message;
        }
      });
  }

  deleteTrain(id: number) {
    this.trainService.deleteTrain(id)
      .subscribe((response: Response) => {
        console.log(response.message);
      });
  }

}
