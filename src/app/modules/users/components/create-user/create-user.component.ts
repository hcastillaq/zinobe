import { Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { nanoid } from 'nanoid';
import { Subject, takeUntil } from 'rxjs';
import { HttpError } from 'src/app/core/interfaces/errors.interface';
import { User } from 'src/app/core/interfaces/user.interface';
import { AlertService } from 'src/app/core/services/alert.service';
import { UserService } from 'src/app/core/services/user.service';
import { actionsUsersSetUser } from 'src/app/core/store/actions/users.actions';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
})
export class CreateUserComponent implements OnInit, OnDestroy {
  loading = false;
  control = new FormControl('', [Validators.required]);
  reset = new EventEmitter<boolean>();
  destroySubs = new Subject();
  constructor(
    private userService: UserService,
    private store: Store,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {}
  ngOnDestroy(): void {
    this.destroySubs.next(false);
    this.destroySubs.complete();
  }
  /**
   * set user
   * @param  {User|undefined} user
   * @returns void
   */
  setUser(user: User | undefined): void {
    this.control.setValue(user);
  }

  create(): void {
    this.loading = true;
    const user: User = this.control.value;
    user.id = nanoid();
    this.userService
      .create(user)
      .pipe(takeUntil(this.destroySubs))
      .subscribe({
        next: (user) => {
          this.loading = false;
          this.store.dispatch(actionsUsersSetUser({ user }));
          this.reset.emit(true);
          this.alertService.default('User created.');
        },
        error: (error: HttpError) => {
          this.loading = false;
          this.alertService.default(error.message);
        },
      });
  }
}
