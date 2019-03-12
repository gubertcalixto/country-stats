import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { AccountComponent } from './account/account.component';
import { AccountAccessComponent } from './account-access/account-access.component';
import { MainComponent } from './main/main.component';
import { ConfigComponent } from './main/config/config.component';
import { SettingsComponent } from './main/settings/settings.component';
import { HomeComponent } from './main/home/home.component';
import { ProfileComponent } from './main/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    AccountComponent,
    AccountAccessComponent,
    MainComponent,
    ConfigComponent,
    SettingsComponent,
    HomeComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
