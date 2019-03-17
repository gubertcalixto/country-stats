import { Component, OnInit } from '@angular/core';

import { CsBase } from '../shared/cs-base.component';

@Component({
  selector: 'cs-account-access',
  templateUrl: './account-access.component.html',
  styleUrls: ['./account-access.component.scss']
})
export class AccountAccessComponent extends CsBase implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
