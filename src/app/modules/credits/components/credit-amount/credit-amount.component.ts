import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-credit-amount',
  templateUrl: './credit-amount.component.html',
  styleUrls: ['./credit-amount.component.scss'],
})
export class CreditAmountComponent implements OnInit, OnDestroy {
  @Input('min') min: number = 1000;
  @Input('max') max: number = 10000;
  @Input('reset') reset = new EventEmitter<boolean>();
  @Output('amount') amount: EventEmitter<number> = new EventEmitter<number>();
  control = new FormControl();
  destroySubs = new Subject();
  constructor() {}

  ngOnInit(): void {
    this.control.setValue(this.min);
    this.control.valueChanges
      .pipe(takeUntil(this.destroySubs))
      .subscribe((value) => {
        this.amount.emit(value);
      });
    this.reset.pipe(takeUntil(this.destroySubs)).subscribe((reset) => {
      if (reset) {
        this.control.reset();
        this.control.setValue(this.min);
      }
    });
  }
  ngOnDestroy(): void {
    this.destroySubs.next(false);
    this.destroySubs.complete();
  }
}
