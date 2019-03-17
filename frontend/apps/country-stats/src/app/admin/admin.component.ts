import { Component, OnInit } from '@angular/core';

import { CsBase } from '../shared/cs-base.component';

@Component({
  selector: 'cs-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent extends CsBase implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
