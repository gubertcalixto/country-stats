import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CountryBaseResponse, PaisView } from '../../../swagger/swag-proxy';
import { storageConsts } from '../../consts/consts';
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
  mapCoordinate: MapCoordinate;
  selectCountryForm: FormGroup;
  countriesList: CountryBaseResponse[];

  constructor(private countryService: CountryService,
              private formBuilder: FormBuilder) {
    super();
    this.selectCountryForm = this.formBuilder.group({
        countrySelect: ['', Validators.required]
      }
    );
  }

  ngOnInit() {
    this.countryService.getCountriesList().subscribe(res => {
      this.countriesList = res;
    });
    const countryCode = localStorage.getItem(storageConsts.countryCode);
    if(countryCode){
      this.countryService.getCountry(null, countryCode).subscribe(country => {
        this.currentCountry = country;
        this.selectCountryForm.get('countrySelect').setValue(country.siglaPais2Digitos);
        this.mapCoordinate = {
          name: country.nome,
          fitBounds: true,
          latitude: Number(localStorage.getItem(storageConsts.latitude)) || Number(country.localizacao.latitude),
          longitude: Number(localStorage.getItem(storageConsts.latitude)) || Number(country.localizacao.longitude)
        }
      });
    }
  }
}
