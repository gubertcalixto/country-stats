import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDividerModule,
  MatIconModule,
  MatListModule,
  MatTooltipModule,
} from '@angular/material';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { CountryStatsSummaryComponent } from './country-stats-summary/country-stats-summary.component';
import { CountryVaccinationComponent } from './country-vaccination/country-vaccination.component';
import { WidgetsSettingsComponent } from './widgets-settings/widgets-settings.component';

@NgModule({
  declarations: [
    WidgetsSettingsComponent,
    CountryStatsSummaryComponent,
    CountryVaccinationComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    FlexLayoutModule,
    MatDividerModule,
    MatTooltipModule,
    DragDropModule,
    MatListModule,
    NgxChartsModule
  ],
  exports: [
    WidgetsSettingsComponent,
    CountryStatsSummaryComponent,
    CountryVaccinationComponent
  ]
})
export class WidgetsModule { }