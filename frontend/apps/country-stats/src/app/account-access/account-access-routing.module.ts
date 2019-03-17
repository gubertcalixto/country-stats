import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccountAccessComponent } from './account-access.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '', component: AccountAccessComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent, data: { title: 'login' } },
      { path: 'forgot-password', component: ForgotPasswordComponent, data: { title: 'forgotpassword' } },
      { path: 'forgot', redirectTo: 'forgot-password' },
      { path: '**', redirectTo: 'login' }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountAccessRoutingModule { }
