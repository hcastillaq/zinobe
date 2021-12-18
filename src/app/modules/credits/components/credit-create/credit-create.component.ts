import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { nanoid } from 'nanoid';
import { Subject, takeUntil } from 'rxjs';
import { Credit } from 'src/app/core/interfaces/credit.interface';
import { HttpError } from 'src/app/core/interfaces/errors.interface';
import { User } from 'src/app/core/interfaces/user.interface';
import { AlertService } from 'src/app/core/services/alert.service';
import { CreditService } from 'src/app/core/services/credit.service';
import { actionsBankUpdateCapital } from 'src/app/core/store/actions/bank.actions';
import { actionsCreditSetCredit } from 'src/app/core/store/actions/credit.actions';

@Component({
  selector: 'app-credit-create',
  templateUrl: './credit-create.component.html',
  styleUrls: ['./credit-create.component.scss'],
})
export class CreditCreateComponent implements OnInit, OnDestroy {
  min = 1000;
  max = 999999999;
  loading = false;
  form: FormGroup = this.buildForm();
  user!: User | undefined;
  destroySubs = new Subject();
  constructor(
    private formBuilder: FormBuilder,
    private creditService: CreditService,
    private alertService: AlertService,
    private store: Store
  ) {}

  ngOnInit(): void {}
  ngOnDestroy(): void {
    this.destroySubs.next(false);
    this.destroySubs.complete();
  }
  /**
   * build form
   * @returns FormGroup
   */
  buildForm(): FormGroup {
    return this.formBuilder.group({
      id: [nanoid(), [Validators.required]],
      amount: [this.min, [Validators.required]],
      date: [''],
      user: ['', [Validators.required]],
    });
  }

  /**
   * set amount from slider
   * @param  {number} amount
   * @returns void
   */
  setAmount(amount: number): void {
    this.form.get('amount')?.setValue(amount);
  }

  /**
   * set user in form
   * @param  {User|null} user
   * @returns void
   */
  setUser(user: User | undefined): void {
    this.user = user;
    this.form.get('user')?.setValue(user);
  }

  create(): void {
    this.loading = true;
    const credit: Credit = this.form.value;
    credit.user_id = credit.user.id;
    this.creditService
      .create(credit)
      .pipe(takeUntil(this.destroySubs))
      .subscribe({
        next: (resp) => {
          this.store.dispatch(
            actionsBankUpdateCapital({ capital: resp.bank.capital })
          );
          this.store.dispatch(actionsCreditSetCredit({ credit: resp.credit }));
          this.loading = false;
          this.resetState();
          const message = resp.credit.approved
            ? 'and approved.'
            : 'but not approved.';
          this.alertService.default('Credit created ' + message);
        },
        error: (error: HttpError) => {
          this.loading = false;
          this.alertService.default(error.message);
        },
      });
  }

  resetState(): void {
    this.user = undefined;
    this.form.reset();
    this.form.get('id')?.setValue(nanoid());
  }
}
