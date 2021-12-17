import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { User } from 'src/app/core/interfaces/user.interface';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-page-create-credits',
  templateUrl: './page-create-credits.component.html',
  styleUrls: ['./page-create-credits.component.scss'],
})
export class PageCreateCreditsComponent implements OnInit {
  min = 1000;
  max = 10000;
  loading = false;
  search = new FormControl('', [Validators.required]);
  form: FormGroup = this.buildForm();
  user!: User;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {}

  ngOnInit(): void {}

  /**
   * build form
   * @returns FormGroup
   */
  buildForm(): FormGroup {
    return this.formBuilder.group({
      amount: [this.min, [Validators.required]],
      date: [''],
      cedula: ['', [Validators.required]],
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
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

  searchUser(): void {
    this.getUser(Number(this.search.value.trim()));
  }

  getUser(cedula: number): void {
    this.loading = true;
    this.userService.getUserByCedula(cedula).subscribe({
      next: (users) => {
        if (users.length) {
          const user = users[0];
          this.user = user;
          this.form.get('name')?.setValue(user.name);
          this.form.get('cedula')?.setValue(user.cedula);
          this.form.get('email')?.setValue(user.email);
        }
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
      },
    });
  }
}
