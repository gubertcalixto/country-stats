import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatButtonModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { WidgetsModule } from 'src/app/widgets/widgets.module';

import { CountryBannerComponent } from './country-banner/country-banner.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CountriesListComponent } from './countries-list/countries-list.component';
import { CountriesListItemComponent } from './countries-list/countries-list-item/countries-list-item.component';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [HomeComponent, CountryBannerComponent, CountriesListComponent, CountriesListItemComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatButtonModule,
    WidgetsModule,
    HomeRoutingModule,
    TranslateModule
  ]
})
export class HomeModule {
}
