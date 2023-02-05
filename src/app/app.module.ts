import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AccountBalanceComponent } from './account-balance/account-balance.component';

import { WithdrawComponent } from './withdraw/withdraw.component';
import { BankServiceService } from './bank-service.service';
import { DepositComponent } from './deposit/deposit.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AccountBalanceComponent,
    WithdrawComponent,
    DepositComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    HttpClientModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  //inserimos o bankService como um provider para estar visível a toda a aplicação
  providers: [BankServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }