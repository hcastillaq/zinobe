import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, merge, Observable, throwError } from 'rxjs';
import { Bank } from '../interfaces/bank.interface';
import { BankRepository } from '../repositories/abstracts/bank.repository';

@Injectable({
  providedIn: 'root',
})
export class BankService {
  constructor(private repository: BankRepository) {}
  getCapital(): Observable<Bank> {
    return this.repository.getCapital();
  }
  pay(amount: number): Observable<Bank> {
    return this.repository.pay(amount).pipe(
      catchError((err: HttpErrorResponse) => {
        return throwError(() => err.error.message);
      })
    );
  }
}
