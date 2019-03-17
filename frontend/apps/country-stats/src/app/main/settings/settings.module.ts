import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material';

import { PreferencesComponent } from './preferences/preferences.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingsRoutingModule } from './settings-routing.module';
import { SettingsComponent } from './settings.component';

@NgModule({
  declarations: [SettingsComponent, ProfileComponent, PreferencesComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    SettingsRoutingModule
  ],
  exports: [SettingsComponent]
})
export class SettingsModule {
}
