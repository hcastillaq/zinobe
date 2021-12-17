import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { MaterialModule } from './modules/material/material.module';
import { reducers } from './core/store/reducers/reducers';
import { HttpClientModule } from '@angular/common/http';
import { UserRepository } from './core/repositories/abstracts/user.repository';
import { UserHttpRepository } from './core/repositories/implementations/userHttp.repository';
import { CreditRepository } from './core/repositories/abstracts/credit.repository';
import { CreditHttpRepository } from './core/repositories/implementations/creditHttp.repository';
import { BankHttpRepository } from './core/repositories/implementations/bankHttp.repository';
import { BankRepository } from './core/repositories/abstracts/bank.repository';
import { ComponentsModule } from './modules/components/components.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ComponentsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
  ],
  providers: [
    {
      provide: UserRepository,
      useClass: UserHttpRepository,
    },
    {
      provide: CreditRepository,
      useClass: CreditHttpRepository,
    },
    {
      provide: BankRepository,
      useClass: BankHttpRepository,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
