import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { WidgetsModule } from 'src/app/widgets/widgets.module';

import { CountryDetailsComponent } from '../country/country-details/country-details.component';
import { CountryBannerComponent } from './country-banner/country-banner.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent, CountryDetailsComponent, CountryBannerComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    WidgetsModule,
    HomeRoutingModule
  ]
})
export class HomeModule {
}
