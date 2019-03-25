import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material';

import { CountryRoutingModule } from './country-routing.module';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [DetailsComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    CountryRoutingModule
  ]
})
export class CountryModule { }
