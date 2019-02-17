import { Component, OnInit } from '@angular/core';
import {Train} from '../models/Train';
import {TrainService} from '../services/train.service';
import {ActivatedRoute} from '@angular/router';
import {Response} from '../models/Response';

@Component({
  selector: 'app-train-info',
  templateUrl: './train-info.component.html',
  styleUrls: ['./train-info.component.css']
})
export class TrainInfoComponent implements OnInit {

  constructor(
    private trainService: TrainService,
    private route: ActivatedRoute
  ) { }

  train: Train;

  ngOnInit() {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.trainService.getTrainInfo(id)
      .subscribe((response: Response) => {
        this.train = response.message;
      });
  }

}
