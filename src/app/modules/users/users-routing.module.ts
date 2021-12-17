import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
