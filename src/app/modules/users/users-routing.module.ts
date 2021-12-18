import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageUsersCreateComponent } from './pages/page-users-create/page-users-create.component';
import { PageUsersListComponent } from './pages/page-users-list/page-users-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
  },
  {
    path: 'list',
    component: PageUsersListComponent,
  },
  {
    path: 'create',
    component: PageUsersCreateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
