import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import {CountryService} from "./country/country.service";

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    MainRoutingModule
  ],
  providers: [
    CountryService
  ],
  exports: [MainComponent]
})
export class MainModule {
}
