import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Reducers } from 'src/app/core/interfaces/reducers.interface';
import { BankService } from 'src/app/core/services/bank.service';
import { actionsBankUpdateCapital } from 'src/app/core/store/actions/bank.actions';

@Component({
  selector: 'app-bank-capital',
  templateUrl: './bank-capital.component.html',
  styleUrls: ['./bank-capital.component.scss'],
})
export class BankCapitalComponent implements OnInit {
  capital = this.store.select((reducer) => reducer.bank.capital);
  loading = false;
  constructor(
    private store: Store<Reducers>,
    private bankService: BankService
  ) {}

  ngOnInit(): void {
    this.getCapital();
  }
  /**
   * get capital from service
   * @returns void
   */
  getCapital(): void {
    this.loading = true;
    this.bankService.getCapital().subscribe({
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
