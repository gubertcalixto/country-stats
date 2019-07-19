import { Component, Input } from '@angular/core';
import { CsBase } from 'src/app/shared/cs-base.component';
import { CountryBaseResponse } from 'src/swagger/swag-proxy';

@Component({
  selector: 'cs-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.scss']
})
export class CountriesListComponent extends CsBase {
  @Input() countryList: CountryBaseResponse[];
}
