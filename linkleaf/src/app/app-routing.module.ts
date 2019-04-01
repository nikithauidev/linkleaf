import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { InvoiceScreenComponent } from './invoice-screen/invoice-screen.component';
import { LogoutComponent } from './logout/logout.component';
import { SelectProductComponent } from './select-product/select-product.component';

const routes: Routes = [
  {
    path: '',
    component: LoginPageComponent
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'logout',
    component: LogoutComponent
  },
  {
    path : 'welcome',
    component : WelcomeComponent,
    children: [
      {
        path : 'invoice',
        component : InvoiceScreenComponent
      },
      {
        path: 'products',
        component: SelectProductComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
