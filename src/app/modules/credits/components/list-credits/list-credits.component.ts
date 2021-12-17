import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { Credit } from 'src/app/core/interfaces/credit.interface';
import { Reducers } from 'src/app/core/interfaces/reducers.interface';
import { CreditService } from 'src/app/core/services/credit.service';
import { actionsCreditSetCredits } from 'src/app/core/store/actions/credit.actions';

@Component({
  selector: 'app-list-credits',
  templateUrl: './list-credits.component.html',
  styleUrls: ['./list-credits.component.scss'],
})
export class ListCreditsComponent implements OnInit, OnDestroy, AfterViewInit {
  dataSource = new MatTableDataSource<Credit>();
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  selectCreditsByState = new FormControl('pending');
  displayedColumns = ['name', 'amount', 'action'];
  loading = false;
  destroySubs = new Subject();
  credits: Credit[] = [];

  constructor(private service: CreditService, private store: Store<Reducers>) {}

  ngOnInit(): void {
    this.getCredits();
    this.subscribeCreditsStore();

    this.selectCreditsByState.valueChanges.subscribe(() => {
      this.setCreditsInDataSourceWithFilter();
    });
  }

  ngOnDestroy(): void {
    this.destroySubs.next(false);
    this.destroySubs.complete();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  /**
   * get credits from service and set in the store
   * @returns void
   */
  getCredits(): void {
    this.loading = true;
    this.service
      .getAll()
      .pipe(takeUntil(this.destroySubs))
      .subscribe({
        next: (credits) => {
          this.store.dispatch(actionsCreditSetCredits({ credits }));
          this.loading = false;
        },
        error: () => {
          this.loading = false;
        },
      });
  }

  /**
   * subscribe data from store and set in dataSource
   * @returns void
   */
  subscribeCreditsStore(): void {
    this.store
      .select((state) => state.credits.credits)
      .pipe(takeUntil(this.destroySubs))
      .subscribe((credits) => {
        this.credits = credits.map((credit) => ({
          ...credit,
          name: credit.user.name,
        }));
        this.setCreditsInDataSourceWithFilter();
      });
  }

  /**
   * set credits in dataSource with  filter depending select state value
   * @returns void
   */
  setCreditsInDataSourceWithFilter(): void {
    let tempCredits: Credit[] = [];
    switch (this.selectCreditsByState.value) {
      case 'all':
        tempCredits = this.credits;
        break;
      case 'pending':
        tempCredits = this.credits.filter(
          (credit) => credit.approved && !credit.paid
        );
        break;
      case 'paid':
        tempCredits = this.credits.filter((credit) => credit.paid);
        break;
    }
    this.dataSource.data = tempCredits;
  }

  /**
   * filter dataSource data
   * @param  {Event} event
   * @returns void
   */
  filter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
