import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProfileModule } from './profile/profile.module';
import { SettingsComponent } from './settings.component';
import { PreferencesComponent } from './preferences/preferences.component';

@NgModule({
  declarations: [SettingsComponent, PreferencesComponent],
  imports: [
    CommonModule,
    ProfileModule
  ],
  exports: [SettingsComponent]
})
export class SettingsModule { }
