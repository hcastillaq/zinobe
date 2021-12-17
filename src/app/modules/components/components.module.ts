import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BankCapitalComponent } from 'src/app/modules/components/bank-capital/bank-capital.component';
import { NavigationComponent } from 'src/app/modules/components/navigation/navigation.component';
import { MaterialModule } from '../material/material.module';
import { UserFormComponent } from './user-form/user-form.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchUserComponent } from './search-user/search-user.component';

const components = [
  BankCapitalComponent,
  NavigationComponent,
  UserFormComponent,
  SearchUserComponent,
];

@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: components,
})
export class ComponentsModule {}
