import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatStepperModule } from '@angular/material';

import { AccountAccessRoutingModule } from './account-access-routing.module';
import { AccountAccessComponent } from './account-access.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [AccountAccessComponent, LoginComponent, ForgotPasswordComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatStepperModule,
    MatIconModule,
    AccountAccessRoutingModule
  ],
  exports: [AccountAccessComponent, LoginComponent, ForgotPasswordComponent]
})
export class AccountAccessModule { }
