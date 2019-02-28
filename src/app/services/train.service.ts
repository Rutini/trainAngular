import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Response} from '../models/Response';
import {Hosts} from '../models/Hosts';

@Injectable({
  providedIn: 'root'
})
export class TrainService {

  constructor(private http: HttpClient) {
  }

  trainApiUrl = 'trains';

  getTrainInfo(id): Observable<Response> {
    return this.http.get<Response>(`${Hosts.API_HOST}/${this.trainApiUrl}/${id}`);
  }

  getAllTrains(id): Observable<Response> {
    return this.http.get<Response>(`${Hosts.API_HOST}/${this.trainApiUrl}/fromStation/${id}`);
  }

  updateTrain(id, train): Observable<Response> {
    const headers = new HttpHeaders()
      .set('authorization', localStorage.getItem('token'));

    return this.http.put<Response>(`${Hosts.API_HOST}/${this.trainApiUrl}/${id}`, train, {headers});
  }

  addTrain(train): Observable<Response> {
    const headers = new HttpHeaders()
      .set('authorization', localStorage.getItem('token'));

    return this.http.post<Response>(`${Hosts.API_HOST}/${this.trainApiUrl}`, train, {headers});
  }

  deleteTrain(id): Observable<Response> {
    const headers = new HttpHeaders()
      .set('authorization', localStorage.getItem('token'));

    return this.http.delete<Response>(`${Hosts.API_HOST}/${this.trainApiUrl}/${id}`, {headers});
  }

}
