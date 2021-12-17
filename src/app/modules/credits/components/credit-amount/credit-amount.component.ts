import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-credit-amount',
  templateUrl: './credit-amount.component.html',
  styleUrls: ['./credit-amount.component.scss'],
})
export class CreditAmountComponent implements OnInit {
  @Input('min') min: number = 1000;
  @Input('max') max: number = 10000;
  @Output('amount') amount: EventEmitter<number> = new EventEmitter<number>();
  control = new FormControl();
  constructor() {}

  ngOnInit(): void {
    this.control.setValue(this.min);
    this.control.valueChanges.subscribe((value) => {
      this.amount.emit(value);
    });
  }
}
