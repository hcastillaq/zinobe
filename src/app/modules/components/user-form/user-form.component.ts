import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import { User } from 'src/app/core/interfaces/user.interface';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit, OnDestroy {
  @Output('values')
  values: EventEmitter<User | undefined> = new EventEmitter<User | undefined>();
  form: FormGroup = this.buildForm();

  @Input('readonly') readonly: boolean = false;
  @Input('reset') reset: EventEmitter<boolean> = new EventEmitter();
  destroySubs = new Subject();
  constructor(private formBuilder: FormBuilder) {}
  @Input('user') set user(user: User | undefined) {
    if (user) {
      Object.keys(user).forEach((key) => {
        this.form.get(key)?.setValue(user[key as keyof User]);
      });
    } else {
      this.form.reset();
    }
  }

  ngOnInit(): void {
    this.buildForm();
    this.form.valueChanges.pipe(takeUntil(this.destroySubs)).subscribe(() => {
      if (this.form.valid) {
        this.values.emit(this.form.value);
      } else {
        this.values.emit(undefined);
      }
    });

    this.reset.pipe(takeUntil(this.destroySubs)).subscribe((reset) => {
      if (reset) {
        this.form.reset();
      }
    });
  }
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
      cedula: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
    });
  }
}
