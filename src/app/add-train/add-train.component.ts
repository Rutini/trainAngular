import {Component, OnInit} from '@angular/core';
import {Train} from '../models/Train';
import {TrainService} from '../services/train.service';
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {Response} from '../models/Response';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-add-train',
  templateUrl: './add-train.component.html',
  styleUrls: ['./add-train.component.css']
})
export class AddTrainComponent implements OnInit {

  constructor(
    private trainService: TrainService,
    private location: Location,
    private route: ActivatedRoute,
    private userService: UserService
  ) {
  }

  train: Train;
  StationId: number;
  loggedUser = this.userService.loggedUser.value;

  ngOnInit() {
    this.getStationId();
    console.log(this.loggedUser.id);
  }

  getStationId(): void {
    this.StationId = +this.route.snapshot.paramMap.get('id');
  }

  cancelClick(): void {
    this.location.back();
  }

  addTrain(addedTrain): void {
    const isLogged = !!localStorage.getItem('token');
    if (!isLogged) {
      alert('Щоб додавати сполучення потрібно увійти!');
    } else {
      this.train = addedTrain;
      this.train.station_id = this.StationId;
      this.train.created_by = this.loggedUser.id;
      console.log(this.train);
      this.trainService.addTrain(this.train)
        .subscribe((response: Response) => {
          console.log(response.message);
          this.location.back();
        });
    }
  }

}
