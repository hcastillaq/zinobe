import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreditsRoutingModule } from './credits-routing.module';
import { PageListCreditsComponent } from './pages/page-list-credits/page-list-credits.component';
import { ListCreditsComponent } from './components/list-credits/list-credits.component';
import { MaterialModule } from '../material/material.module';
import { PageCreateCreditsComponent } from './pages/page-create-credits/page-create-credits.component';
import { CreditPayComponent } from './components/credit-pay/credit-pay.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreditAmountComponent } from './components/credit-amount/credit-amount.component';
import { ComponentsModule } from '../components/components.module';
import { CreditCreateComponent } from './components/credit-create/credit-create.component';

@NgModule({
  declarations: [
    PageListCreditsComponent,
    ListCreditsComponent,
    PageCreateCreditsComponent,
    CreditPayComponent,
    CreditAmountComponent,
    CreditCreateComponent,
  ],
  imports: [
    CommonModule,
    CreditsRoutingModule,
    MaterialModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class CreditsModule {}
