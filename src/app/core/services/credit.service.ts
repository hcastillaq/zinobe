import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
}
