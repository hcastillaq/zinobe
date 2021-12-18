import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { User } from 'src/app/core/interfaces/user.interface';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.scss'],
})
export class SearchUserComponent implements OnInit, OnDestroy {
  destroySubs = new Subject();
  loading = false;
  search = new FormControl('', [
    Validators.required,
    Validators.pattern(/^[0-9]+$/),
  ]);

  @Output('user')
  user: EventEmitter<User | undefined> = new EventEmitter<User | undefined>();
  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.destroySubs.next(false);
    this.destroySubs.complete();
  }
  /**
   * runs when user click on search button
   * @returns void
   */
  searchUser(): void {
    this.getUser(Number(this.search.value.trim()));
  }

  /**
   * get user by cedula from service
   * @param  {number} cedula
   * @returns void
   */
  getUser(cedula: number): void {
    this.loading = true;
    this.userService
      .getUserByCedula(cedula)
      .pipe(takeUntil(this.destroySubs))
      .subscribe({
        next: (users) => {
          const user = users[0];
          this.user.emit(user);
          this.loading = false;
        },
        error: (err) => {
          this.loading = false;
        },
      });
  }
}
