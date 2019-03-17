import { Component, OnInit } from '@angular/core';

import { CsBase } from '../../shared/cs-base.component';

@Component({
  selector: 'cs-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent extends CsBase implements OnInit {

  logged: any;

  constructor() {
    super();
  }

  ngOnInit() {
  }

  signup() {

  }

}
