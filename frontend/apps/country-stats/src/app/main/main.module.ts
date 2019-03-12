import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomeModule } from './home/home.module';
import { MainComponent } from './main.component';
import { SettingsModule } from './settings/settings.module';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    SettingsModule,
    HomeModule
  ],
  exports: [MainComponent]
})
export class MainModule { }
