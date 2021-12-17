import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { PageUsersListComponent } from './pages/page-users-list/page-users-list.component';
import { PageUsersCreateComponent } from './pages/page-users-create/page-users-create.component';
import { ListUsersComponent } from './components/list-users/list-users.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    PageUsersListComponent,
    PageUsersCreateComponent,
    ListUsersComponent,
    CreateUserComponent,
  ],
  imports: [CommonModule, UsersRoutingModule, MaterialModule],
  providers: [],
})
export class UsersModule {}
