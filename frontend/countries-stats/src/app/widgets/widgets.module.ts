import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {MatCardModule, MatIconModule, MatListModule, MatTooltipModule} from '@angular/material';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { CountryStatsSummaryComponent } from '../widgets/country-stats-summary/country-stats-summary.component';
import { CountryVaccinationComponent } from '../widgets/country-vaccination/country-vaccination.component';
import { MapWidgetComponent } from '../widgets/map-widget/map-widget.component';
import { CountryPhonesComponent } from './country-phones/country-phones.component';
import { CountryEletricityComponent } from './country-eletricity/country-eletricity.component';
import {FlexModule} from "@angular/flex-layout";
import { CountryCurrencyComponent } from './country-currency/country-currency.component';
import { CountryLanguageComponent } from './country-language/country-language.component';

@NgModule({
  declarations: [
    MapWidgetComponent,
    CountryVaccinationComponent,
    CountryStatsSummaryComponent,
    CountryPhonesComponent,
    CountryEletricityComponent,
    CountryCurrencyComponent,
    CountryLanguageComponent
  ],
  imports: [
    CommonModule,
    LeafletModule.forRoot(),
    NgxChartsModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatTooltipModule,
    FlexModule
  ],
  exports: [
    MapWidgetComponent,
    CountryVaccinationComponent,
    CountryStatsSummaryComponent,
    CountryPhonesComponent,
    CountryEletricityComponent,
    CountryCurrencyComponent,
    CountryLanguageComponent
  ]
})
export class WidgetsModule {
}
