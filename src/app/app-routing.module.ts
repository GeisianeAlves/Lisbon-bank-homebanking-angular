import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { AccountBalanceComponent } from './account-balance/account-balance.component';

import { WithdrawComponent } from './withdraw/withdraw.component';
import { DepositComponent } from './deposit/deposit.component';


//rotas adicionadas com paths (caminhos - URL) e componentes (páginas) a serem carregados
const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'account-balance', component: AccountBalanceComponent},
  { path: 'deposit', component: DepositComponent},
  { path: 'withdraw', component: WithdrawComponent },
  { path: '', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }