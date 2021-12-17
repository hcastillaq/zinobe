import { Observable, of } from 'rxjs';
import { User } from '../../interfaces/user.interface';
import { UserRepository } from '../abstracts/user.repository';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UserHttpRepository extends UserRepository {
  private path = environment.api;

  constructor(private http: HttpClient) {
    super();
  }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(`${this.path}/users`);
  }
}
