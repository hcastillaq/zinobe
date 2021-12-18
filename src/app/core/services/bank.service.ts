import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, merge, Observable, throwError } from 'rxjs';
import { Bank } from '../interfaces/bank.interface';
import { Credit } from '../interfaces/credit.interface';
import { BankRepository } from '../repositories/abstracts/bank.repository';

@Injectable({
  providedIn: 'root',
})
export class BankService {
  constructor(private repository: BankRepository) {}
  getCapital(): Observable<Bank> {
    return this.repository.getCapital();
  }
  pay(credit: Credit): Observable<{ bank: Bank; credit: Credit }> {
    return this.repository.pay(credit).pipe(
      catchError((err: HttpErrorResponse) => {
        return throwError(() => err.error.message);
      })
    );
  }
}
