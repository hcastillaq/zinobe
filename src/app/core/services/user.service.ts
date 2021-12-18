import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
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

  create(user: User): Observable<User> {
    return this.repository
      .create(user)
      .pipe(
        catchError((error: HttpErrorResponse) => throwError(() => error.error))
      );
  }
}
