import {Component, Inject, OnInit} from '@angular/core';

import { CsBase } from '../../shared/cs-base.component';
import {CountryService} from "../country/country.service";
import { storageConsts } from '../../consts/consts';
import { CountryBaseResponse, PaisView } from "../../../swagger/swag-proxy";
import {MapCoordinate} from "../../widgets/map-widget/map";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

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

  constructor(@Inject(CountryService) private countryService: CountryService,
              @Inject(FormBuilder) private formBuilder: FormBuilder) {
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
