import { Component, OnInit } from '@angular/core';
import { CsBase } from 'src/app/shared/cs-base.component';
import {ActivatedRoute} from "@angular/router";
import {CountryService} from "./country.service";
import {PaisView} from "../../../swagger/swag-proxy";

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss']
})
export class CountryDetailsComponent extends CsBase implements OnInit {
  country: PaisView;
  defaultBackgroundImage = '/assets/images/country_details.jpg';

  constructor(private route: ActivatedRoute, private countryService: CountryService) {
    super();
  }

  ngOnInit() {
    const countryIso2 = this.route.snapshot.paramMap.get("countryIso");
    this.countryService.getCountry(null, countryIso2).subscribe(result => {
      this.country = result;
    });
  }
}
