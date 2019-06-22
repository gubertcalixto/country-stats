import { Component, OnInit } from '@angular/core';

import { CsBase } from '../../shared/cs-base.component';

@Component({
  selector: 'cs-country-vaccination',
  templateUrl: './country-vaccination.component.html',
  styleUrls: ['./country-vaccination.component.scss']
})
export class CountryVaccinationComponent extends CsBase implements OnInit {


  constructor() {
    super();
  }
  
  ngOnInit() {
  }

}
