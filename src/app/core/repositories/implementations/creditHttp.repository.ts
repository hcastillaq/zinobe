import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CreditRepository } from '../abstracts/credit.repository';
import { Credit } from '../../interfaces/credit.interface';
import { Bank } from '../../interfaces/bank.interface';

@Injectable({
  providedIn: 'root',
})
export class CreditHttpRepository extends CreditRepository {
  private path = environment.api + '/credits';

  constructor(private http: HttpClient) {
    super();
  }

  getAll(): Observable<Credit[]> {
    return this.http.get<Credit[]>(this.path);
  }
  getAllPending(): Observable<Credit[]> {
    return this.http.get<Credit[]>(this.path + '/pending');
  }
  update(credit: Credit): Observable<Credit> {
    return this.http.put<Credit>(this.path + '/' + credit.id, credit);
  }

  create(credit: Credit): Observable<{ bank: Bank; credit: Credit }> {
    return this.http.post<{ bank: Bank; credit: Credit }>(this.path, credit);
  }
}
