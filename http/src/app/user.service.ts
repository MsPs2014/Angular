import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.model';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {}

  add(user: User): Observable<any> {
    return this.http.post(environment.apiBaseUrl, user);
  }

  update(user: User): Observable<any> {
    return this.http.put(`${environment.apiBaseUrl}/${user.id}`, user);
  }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(environment.apiBaseUrl+'/GetAlluseres');
  }
}
