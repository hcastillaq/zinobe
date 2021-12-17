import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { concatMap, delay, forkJoin, mergeMap } from 'rxjs';
import { Credit } from 'src/app/core/interfaces/credit.interface';
import { Reducers } from 'src/app/core/interfaces/reducers.interface';
import { AlertService } from 'src/app/core/services/alert.service';
import { BankService } from 'src/app/core/services/bank.service';
import { CreditService } from 'src/app/core/services/credit.service';
import { actionsBankUpdateCapital } from 'src/app/core/store/actions/bank.actions';
import { actionsCreditUpdateCredit } from 'src/app/core/store/actions/credit.actions';

@Component({
  selector: 'app-credit-pay',
  templateUrl: './credit-pay.component.html',
  styleUrls: ['./credit-pay.component.scss'],
})
export class CreditPayComponent implements OnInit {
  @Input('credit') credit!: Credit;
  loading = false;

  constructor(
    private store: Store<Reducers>,
    private bankService: BankService,
    private creditService: CreditService,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    if (!this.credit) {
      throw new Error('Credit is quired');
    }
  }
  /**
   * validate if credit is valid for pay
   * @returns boolean
   */
  validToPay(): boolean {
    return this.credit.approved && !this.credit.paid;
  }
  /**
   * runs when user click in pay button, call the services for
   * update bank and credit
   * @returns void
   */
  pay(): void {
    this.loading = true;
    this.bankService
      .pay(this.credit.amount)
      .pipe(
        mergeMap((resp) => {
          this.store.dispatch(
            actionsBankUpdateCapital({ capital: resp.capital })
          );
          return this.creditService.update({ ...this.credit, paid: true });
        })
      )
      .subscribe({
        next: (credit) => {
          this.store.dispatch(actionsCreditUpdateCredit({ credit }));
          this.loading = false;
        },
        error: (error: string) => {
          this.alertService.default(error);
          this.loading = false;
        },
      });
  }
}
