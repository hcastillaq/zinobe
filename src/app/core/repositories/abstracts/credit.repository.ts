import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bank } from '../../interfaces/bank.interface';
import { Credit } from '../../interfaces/credit.interface';

@Injectable({
  providedIn: 'root',
})
export abstract class CreditRepository {
  abstract getAll(): Observable<Credit[]>;
  abstract getAllPending(): Observable<Credit[]>;
  abstract update(credit: Credit): Observable<Credit>;
  abstract create(credit: Credit): Observable<{ bank: Bank; credit: Credit }>;
}
