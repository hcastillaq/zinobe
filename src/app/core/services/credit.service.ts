import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Bank } from '../interfaces/bank.interface';
import { Credit } from '../interfaces/credit.interface';
import { CreditRepository } from '../repositories/abstracts/credit.repository';

@Injectable({
  providedIn: 'root',
})
export class CreditService {
  constructor(private repository: CreditRepository) {}

  getAll(): Observable<Credit[]> {
    return this.repository.getAll();
  }
  getAllPending(): Observable<Credit[]> {
    return this.repository.getAllPending();
  }
  update(credit: Credit): Observable<Credit> {
    return this.repository.update(credit);
  }
  create(credit: Credit): Observable<{ bank: Bank; credit: Credit }> {
    return this.repository
      .create(credit)
      .pipe(
        catchError((error: HttpErrorResponse) => throwError(() => error.error))
      );
  }
}
