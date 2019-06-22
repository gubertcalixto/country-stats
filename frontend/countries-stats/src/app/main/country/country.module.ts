import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CountryDetailsComponent } from './country-details.component';
import { CountryRoutingModule } from './country-routing.module';

@NgModule({
  declarations: [CountryDetailsComponent],
  imports: [
    CommonModule,
    CountryRoutingModule
  ],
  exports: [CountryDetailsComponent]
})
export class CountryModule {
}
