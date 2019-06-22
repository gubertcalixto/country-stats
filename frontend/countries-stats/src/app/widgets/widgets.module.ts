import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule, MatIconModule, MatListModule } from '@angular/material';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { CountryStatsSummaryComponent } from '../widgets/country-stats-summary/country-stats-summary.component';
import { CountryVaccinationComponent } from '../widgets/country-vaccination/country-vaccination.component';
import { MapWidgetComponent } from '../widgets/map-widget/map-widget.component';

@NgModule({
  declarations: [
    MapWidgetComponent,
    CountryVaccinationComponent,
    CountryStatsSummaryComponent
  ],
  imports: [
    CommonModule,
    LeafletModule.forRoot(),
    NgxChartsModule,
    MatCardModule,
    MatIconModule,
    MatListModule
  ],
  exports: [
    MapWidgetComponent,
    CountryVaccinationComponent,
    CountryStatsSummaryComponent
  ]
})
export class WidgetsModule {
}
