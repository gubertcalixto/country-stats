import { Component } from '@angular/core';

import { CsBase } from '../../shared/cs-base.component';

@Component({
  selector: 'cs-country-stats-summary',
  templateUrl: './country-stats-summary.component.html',
  styleUrls: ['./country-stats-summary.component.scss']
})
export class CountryStatsSummaryComponent extends CsBase {
  populationData: any[];
  costData: any[];
  tourismData: any[];
  populationColorScheme = { domain: ['#5AA454'] };
  costColorScheme = { domain: ['#A10A28'] };
  tourismColorScheme = { domain: ['#C7B42C'] };

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  // line, area
  autoScale = true;

  onSelect(event) {
    console.log(event);
  }

  constructor() {
    super();
    this.populationData = populationDataBase;
    this.costData = costDataBase;
    this.tourismData = tourismDataBase;
  }

}
export const populationDataBase = [{ name: '8940000', value: 8940000 }];
export const costDataBase = [{ name: '5000000', value: 5000000 }];
export const tourismDataBase = [{ name: '7200000', value: 7200000 }];
