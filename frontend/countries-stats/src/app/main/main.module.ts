import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import {CountryService} from "./country/country.service";
import { CountryDetailsComponent } from './country-details/country-details.component';

@NgModule({
  declarations: [MainComponent, CountryDetailsComponent],
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
