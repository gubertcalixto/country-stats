import { Component, Input } from '@angular/core';
import { CsBase } from 'src/app/shared/cs-base.component';
import { CountryBaseResponse } from 'src/swagger/swag-proxy';

@Component({
  selector: 'cs-countries-list-item',
  templateUrl: './countries-list-item.component.html',
  styleUrls: ['./countries-list-item.component.scss']
})
export class CountriesListItemComponent extends CsBase {
  @Input() country: CountryBaseResponse;
}
