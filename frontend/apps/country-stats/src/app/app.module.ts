import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AccountAccessModule } from './account-access/account-access.module';
import { AdminModule } from './admin/admin.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainModule } from './main/main.module';


@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainModule,
    AdminModule,
    AccountAccessModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
