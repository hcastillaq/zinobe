import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Reducers } from 'src/app/core/interfaces/reducers.interface';

@Component({
  selector: 'app-bank-capital',
  templateUrl: './bank-capital.component.html',
  styleUrls: ['./bank-capital.component.scss'],
})
export class BankCapitalComponent implements OnInit {
  capital = this.store.select((reducer) => reducer.bank.capital);

  constructor(private store: Store<Reducers>) {}

  ngOnInit(): void {}
}
