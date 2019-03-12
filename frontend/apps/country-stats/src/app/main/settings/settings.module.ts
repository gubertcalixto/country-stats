import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProfileModule } from './profile/profile.module';
import { SettingsComponent } from './settings.component';

@NgModule({
  declarations: [SettingsComponent],
  imports: [
    CommonModule,
    ProfileModule
  ],
  exports: [SettingsComponent]
})
export class SettingsModule { }
