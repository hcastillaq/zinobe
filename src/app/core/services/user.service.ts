import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { User } from '../interfaces/user.interface';
import { UserRepository } from '../repositories/abstracts/user.repository';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private repository: UserRepository) {}

  getUsers(): Observable<User[]> {
    return this.repository.getAll();
  }

  getUserByCedula(cedula: number): Observable<User[]> {
    return this.repository.getUserByCedula(cedula);
  }
}
