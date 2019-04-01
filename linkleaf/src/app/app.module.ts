import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import {CommonModule} from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SelectProductComponent } from './select-product/select-product.component';
import { InvoiceScreenComponent } from './invoice-screen/invoice-screen.component';
import { LogoutComponent } from './logout/logout.component';

import { AuthGuard } from './auth.guard';
import { AuthGuardService } from './auth-guard.service';
import { LogoHeaderComponent } from './Components/logo-header/logo-header.component';
import { FooterComponent } from './Components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    WelcomeComponent,
    SelectProductComponent,
    InvoiceScreenComponent,
    LogoutComponent,
    LogoHeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [AuthGuard, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
