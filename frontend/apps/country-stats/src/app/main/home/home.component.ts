import { Component, OnInit } from '@angular/core';

import { CsBase } from '../../shared/cs-base.component';

@Component({
  selector: 'cs-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends CsBase implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
