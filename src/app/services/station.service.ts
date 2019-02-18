import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Response} from '../models/Response';
import {Hosts} from '../models/Hosts';

@Injectable({
  providedIn: 'root'
})
export class StationService {

  constructor(private http: HttpClient) { }

  stationApiUrl = '/stations';

  getAllStations(): Observable<Response> {
    return this.http.get<Response>(`${Hosts.API_HOST}/${this.stationApiUrl}`);
  }

  getStationInfo(id): Observable<Response> {
    return this.http.get<Response>(`${Hosts.API_HOST}/${this.stationApiUrl}/${id}`);
  }
}
