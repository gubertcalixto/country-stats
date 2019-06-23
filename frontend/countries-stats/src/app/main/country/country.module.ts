import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CountryDetailsComponent } from './country-details.component';
import { CountryRoutingModule } from './country-routing.module';
import {FlexModule} from "@angular/flex-layout";

@NgModule({
  declarations: [CountryDetailsComponent],
  imports: [
    CommonModule,
    CountryRoutingModule,
    FlexModule
  ],
  exports: [CountryDetailsComponent]
})
export class CountryModule {
}
