import {Component, OnInit} from '@angular/core';
import {StationService} from '../services/station.service';
import {Response} from '../models/Response';
import {Station} from '../models/Station';

@Component({
  selector: 'app-stations',
  templateUrl: './stations.component.html',
  styleUrls: ['./stations.component.css']
})
export class StationsComponent implements OnInit {

  stations: Station[];
  station: Station;

  constructor(
    private stationService: StationService
  ) {
  }

  ngOnInit() {
    this.getAllStations();
  }

  getAllStations(): void {
    this.stationService.getAllStations()
      .subscribe((response: Response) => {
        if (response.success) {
          this.stations = response.message;
        }
      });
  }

}
