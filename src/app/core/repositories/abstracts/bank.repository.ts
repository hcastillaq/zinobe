import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bank } from '../../interfaces/bank.interface';
import { Credit } from '../../interfaces/credit.interface';

@Injectable({
  providedIn: 'root',
})
export abstract class BankRepository {
  abstract pay(credit: Credit): Observable<{ bank: Bank; credit: Credit }>;
  abstract getCapital(): Observable<Bank>;
}
