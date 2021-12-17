import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { nanoid } from 'nanoid';
import { User } from 'src/app/core/interfaces/user.interface';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
  @Output('values')
  values: EventEmitter<User | undefined> = new EventEmitter<User | undefined>();
  form: FormGroup = this.buildForm();

  @Input('readonly') readonly: boolean = false;
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
    this.form.valueChanges.subscribe(() => {
      if (this.form.valid) {
        this.values.emit(this.form.value);
      } else {
        this.values.emit(undefined);
      }
    });
  }

  buildForm(): FormGroup {
    return this.formBuilder.group({
      id: ['', [Validators.required]],
      cedula: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
    });
  }
}
