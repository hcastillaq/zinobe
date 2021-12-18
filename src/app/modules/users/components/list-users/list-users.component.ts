import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { delay, EMPTY, of, Subject, takeUntil } from 'rxjs';
import { Reducers } from 'src/app/core/interfaces/reducers.interface';
import { User } from 'src/app/core/interfaces/user.interface';
import { UserService } from 'src/app/core/services/user.service';
import { actionsUsersSetUsers } from 'src/app/core/store/actions/users.actions';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss'],
})
export class ListUsersComponent implements OnInit, OnDestroy, AfterViewInit {
  displayedColumns = ['cedula', 'name', 'email'];
  dataSource = new MatTableDataSource<User>([]);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  loading: boolean = false;
  destroySubs = new Subject();

  constructor(private store: Store<Reducers>, private service: UserService) {}

  ngOnInit(): void {
    this.getUsers();
    this.subscribeUsersFromStore();
  }

  ngOnDestroy(): void {
    this.destroySubs.next(false);
    this.destroySubs.complete();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
  /**
   * get users from service and set users in store
   * @returns void
   */
  getUsers(): void {
    this.loading = true;
    this.service
      .getUsers()
      .pipe(takeUntil(this.destroySubs))
      .subscribe({
        next: (users) => {
          this.store.dispatch(actionsUsersSetUsers({ users }));
          this.loading = false;
        },
        error: (error) => {
          this.loading = false;
        },
      });
  }

  /**
   * subscribe users from store and set in data source
   * @returns void
   */
  subscribeUsersFromStore(): void {
    this.store
      .select((reducer) => reducer.user.users)
      .pipe(takeUntil(this.destroySubs))
      .subscribe((users) => {
        this.dataSource.data = users;
      });
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
