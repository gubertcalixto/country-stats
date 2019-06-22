import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { storageConsts } from 'src/app/shared/consts';
import { isNullOrUndefined } from 'util';

import { CountryBaseResponse, PaisView } from '../../../swagger/swag-proxy';
import { CsBase } from '../../shared/cs-base.component';
import { MapCoordinate } from '../../widgets/map-widget/map';
import { CountryService } from '../country/country.service';

@Component({
  selector: 'cs-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends CsBase implements OnInit {
  currentCountry: PaisView;
  mapCoordinate: MapCoordinate[];
  selectCountryForm: FormGroup;
  countriesList: CountryBaseResponse[];
  filteredCountriesList: CountryBaseResponse[];

  constructor(private countryService: CountryService,
    private formBuilder: FormBuilder) {
    super();
    this.selectCountryForm = this.formBuilder.group({ countrySelect: ['', []] });
  }

  ngOnInit() {
    this.countryService.getCountriesList().subscribe(res => {
      this.countriesList = res;
      console.log(this.countriesList);
      this.filteredCountriesList = this.countriesList;
      this.filterCountries()
    });
    const countryCode = localStorage.getItem(storageConsts.countryCode);
    if (countryCode) {
      this.countryService.getCountry(null, countryCode).subscribe(country => {
        this.currentCountry = country;
        console.log(this.currentCountry);
        this.mapCoordinate = [{
          name: country.nome,
          fitBounds: true,
          latitude: Number(localStorage.getItem(storageConsts.latitude)) || Number(country.localizacao.latitude),
          longitude: Number(localStorage.getItem(storageConsts.latitude)) || Number(country.localizacao.longitude)
        }];
      });
    }
  }
  public filterCountries() {
    this.selectCountryForm.get('countrySelect').valueChanges.subscribe(changed => {
      let value = this.selectCountryForm.get('countrySelect').value;
      if (isNullOrUndefined(value) || value === '') {
        this.filteredCountriesList = [...this.countriesList];
      }
      else {
        value = String(value).toLowerCase();
        this.filteredCountriesList = [...this.countriesList
          .filter(x => x.countryName.toLowerCase().includes(value) || x.countryIso2.toLowerCase().includes(value))];
      }
    });
  }
}
