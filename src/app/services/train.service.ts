import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Response} from '../models/Response';
import {Hosts} from '../models/Hosts';

@Injectable({
  providedIn: 'root'
})
export class TrainService {

  constructor(private http: HttpClient) {
  }

  trainApiUrl = '/trains';

  getTrainInfo(id): Observable<Response> {
    return this.http.get<Response>(`${Hosts.API_HOST}/${this.trainApiUrl}/${id}`);
  }

  getAllTrains(id): Observable<Response> {
    return this.http.get<Response>(`${Hosts.API_HOST}/${this.trainApiUrl}/fromStation/${id}`);
  }

}
