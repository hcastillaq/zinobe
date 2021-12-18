import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { Reducers } from 'src/app/core/interfaces/reducers.interface';
import { BankService } from 'src/app/core/services/bank.service';
import { actionsBankUpdateCapital } from 'src/app/core/store/actions/bank.actions';

@Component({
  selector: 'app-bank-capital',
  templateUrl: './bank-capital.component.html',
  styleUrls: ['./bank-capital.component.scss'],
})
export class BankCapitalComponent implements OnInit, OnDestroy {
  capital = this.store.select((reducer) => reducer.bank.capital);
  loading = false;
  destroySubs = new Subject();
  constructor(
    private store: Store<Reducers>,
    private bankService: BankService
  ) {}

  ngOnInit(): void {
    this.getCapital();
  }
  ngOnDestroy(): void {
    this.destroySubs.next(false);
    this.destroySubs.complete();
  }
  /**
   * get capital from service
   * @returns void
   */
  getCapital(): void {
    this.loading = true;
    this.bankService
      .getCapital()
      .pipe(takeUntil(this.destroySubs))
      .subscribe({
        next: (bank) => {
          this.store.dispatch(
            actionsBankUpdateCapital({ capital: bank.capital })
          );
          this.loading = false;
        },
        error: () => {
          this.loading = false;
        },
      });
  }
}
