import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';
import { InputComponent } from './components/input/input.component';
import { SigninComponent } from './pages/signin/signin.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RegisterComponent } from './pages/register/register.component';
import { VerifyEmailComponent } from './pages/verify-email/verify-email.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { ResetPasswordEmailComponent } from './pages/reset-password-email/reset-password-email.component';
import { TwoStepVerificationComponent } from './pages/two-step-verification/two-step-verification.component';
import { ReceiveCodeComponent } from './pages/receive-code/receive-code.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { ExchangeComponent } from './pages/exchange/exchange.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MarketComponent } from './pages/market/market.component';
import { Market2Component } from './pages/market2/market2.component';
import { WalletComponent } from './pages/wallet/wallet.component';
import { Exchange2Component } from './pages/exchange2/exchange2.component';
import { AccountComponent } from './pages/account/account.component';
import { BodyComponent } from './components/body/body.component';
import { SelectComponent } from './components/select/select.component';
import { SelectbComponent } from './components/selectb/selectb.component';


@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    CardComponent,
    InputComponent,
    SigninComponent,
    DashboardComponent,
    RegisterComponent,
    VerifyEmailComponent,
    ResetPasswordComponent,
    ResetPasswordEmailComponent,
    TwoStepVerificationComponent,
    ReceiveCodeComponent,
    SidebarComponent,
    ExchangeComponent,
    NavbarComponent,
    MarketComponent,
    Market2Component,
    WalletComponent,
    Exchange2Component,
    AccountComponent,
    BodyComponent,
    SelectComponent,
    SelectbComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
