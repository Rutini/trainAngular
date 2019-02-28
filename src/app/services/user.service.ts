import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Response} from '../models/Response';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Hosts} from '../models/Hosts';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  userApiUrl = 'users';
  loggedUser = new BehaviorSubject<any>({id: null, name: 'Гість', credentials: null});

  registerUser(user): Observable<Response> {
    return this.http.post<Response>(`${Hosts.API_HOST}/${this.userApiUrl}/register`, user);
  }

  loginUser(user): Observable<Response> {
    return this.http.post<Response>(`${Hosts.API_HOST}/${this.userApiUrl}/login`, user);
  }

  getLoggedUser(): Observable<Response> {
    const headers = new HttpHeaders()
      .set('authorization', localStorage.getItem('token'));

    return this.http.get<Response>(`${Hosts.API_HOST}/${this.userApiUrl}/user/info`, {headers});
  }

}
