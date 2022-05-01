import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ReceiveCodeComponent } from './pages/receive-code/receive-code.component';
import { RegisterComponent } from './pages/register/register.component';
import { ResetPasswordEmailComponent } from './pages/reset-password-email/reset-password-email.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { SigninComponent } from './pages/signin/signin.component';
import { TwoStepVerificationComponent } from './pages/two-step-verification/two-step-verification.component';
import { VerifyEmailComponent } from './pages/verify-email/verify-email.component';
import { MarketComponent } from './pages/market/market.component';
import { Market2Component } from './pages/market2/market2.component';
import { WalletComponent } from './pages/wallet/wallet.component';
import { ExchangeComponent } from './pages/exchange/exchange.component';
import { Exchange2Component } from './pages/exchange2/exchange2.component';
import { AccountComponent } from './pages/account/account.component';
import { BodyComponent } from './components/body/body.component';

const routes: Routes = [
  {
    path: "body",
    component: BodyComponent,
    children:[
      {path: '', redirectTo:'dashboard', pathMatch:'full'},
      {
        path: "wallet",
        component: WalletComponent,
      },
      {
        path: "dashboard",
        component: DashboardComponent,
      },
      {
        path: "account",
        component: AccountComponent
      },
      {
        path: "exchange",
        component: ExchangeComponent
      },
      {
        path: "exchange2",
        component: Exchange2Component
      },
      {
        path: "market",
        component: MarketComponent
      },
      {
        path: "market2",
        component: Market2Component
      },
    ],
  },
  {
    path: "signin",
    component: SigninComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "verify-email",
    component: VerifyEmailComponent
  },
  {
    path: "reset-password",
    component: ResetPasswordComponent
  },
  {
    path: "reset-password-email",
    component: ResetPasswordEmailComponent
  },
  {
    path: "two-step-verification",
    component: TwoStepVerificationComponent
  },
  {
    path: "receive-code",
    component: ReceiveCodeComponent
  },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
