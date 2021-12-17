import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bank } from '../../interfaces/bank.interface';

@Injectable({
  providedIn: 'root',
})
export abstract class BankRepository {
  abstract pay(capital: number): Observable<Bank>;
  abstract getCapital(): Observable<Bank>;
}
