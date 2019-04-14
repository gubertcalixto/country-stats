import { Component, OnInit } from '@angular/core';

import { CsBase } from '../../../shared/cs-base.component';

@Component({
  selector: 'cs-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent extends CsBase implements OnInit {
  country: any;
  defaultBackgroundImage = 'apps/country-stats/src/assets/images/country - details.jpg';

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
