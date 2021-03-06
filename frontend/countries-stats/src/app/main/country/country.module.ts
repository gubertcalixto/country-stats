import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexModule } from '@angular/flex-layout';
import { WidgetsModule } from 'src/app/widgets/widgets.module';

import { CountryDetailsComponent } from './country-details.component';
import { CountryRoutingModule } from './country-routing.module';
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
  declarations: [CountryDetailsComponent],
  imports: [
    CommonModule,
    WidgetsModule,
    FlexModule,
    CountryRoutingModule,
    TranslateModule
  ],
  exports: [CountryDetailsComponent]
})
export class CountryModule {
}
