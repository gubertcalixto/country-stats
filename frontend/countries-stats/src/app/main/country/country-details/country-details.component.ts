import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss']
})
export class CountryDetailsComponent extends CsBase implements OnInit {
  country: any;
  defaultBackgroundImage = 'apps/country-stats/src/assets/images/country - details.jpg';

  constructor() {
    super();
  }

  ngOnInit() {
  }
}
