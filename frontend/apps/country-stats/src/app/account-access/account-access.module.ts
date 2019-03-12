import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AccountAccessComponent } from './account-access.component';

@NgModule({
  declarations: [AccountAccessComponent],
  imports: [
    CommonModule
  ],
  exports: [AccountAccessComponent]
})
export class AccountAccessModule { }
