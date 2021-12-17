import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Bank } from '../../interfaces/bank.interface';
import { BankRepository } from '../abstracts/bank.repository';

@Injectable({
  providedIn: 'root',
})
export class BankHttpRepository extends BankRepository {
  private path = environment.api + '/bank';
  constructor(private http: HttpClient) {
    super();
  }
  getCapital(): Observable<Bank> {
    return this.http.get<Bank>(this.path);
  }
  pay(amount: number): Observable<Bank> {
    return this.http.post<Bank>(`${this.path}/pay`, { amount });
  }
}
