import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageCreateCreditsComponent } from './pages/page-create-credits/page-create-credits.component';
import { PageListCreditsComponent } from './pages/page-list-credits/page-list-credits.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
  },
  {
    path: 'list',
    component: PageListCreditsComponent,
  },
  {
    path: 'create',
    component: PageCreateCreditsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreditsRoutingModule {}
