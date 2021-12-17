import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Credit } from '../../interfaces/credit.interface';

@Injectable({
  providedIn: 'root',
})
export abstract class CreditRepository {
  abstract getAll(): Observable<Credit[]>;
  abstract getAllPending(): Observable<Credit[]>;
  abstract update(credit: Credit): Observable<Credit>;
}
