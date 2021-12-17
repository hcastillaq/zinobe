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
  @Output('change') change: EventEmitter<number> = new EventEmitter<number>();
  control = new FormControl();
  constructor() {}

  ngOnInit(): void {
    this.control.setValue(this.min);
    this.control.valueChanges.subscribe((value) => {
      this.change.emit(value);
    });
  }
  /**
   * format slider label
   * @param  {number} value
   * @returns string
   */
  formatLabel(value: number): string | number {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }
    return value;
  }
}
