import { Component, OnInit } from '@angular/core';

import { CsBase } from '../../../shared/cs-base.component';

@Component({
  selector: 'cs-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent extends CsBase implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
