import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export abstract class UserRepository {
  abstract getAll(): Observable<User[]>;
  abstract getUserByCedula(cedula: number): Observable<User[]>;
  abstract create(user: User): Observable<User>;
}
