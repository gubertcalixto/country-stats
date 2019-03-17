import { Component, OnInit } from '@angular/core';

import { CsBase } from '../../../shared/cs-base.component';

@Component({
  selector: 'cs-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.scss']
})
export class PreferencesComponent extends CsBase implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
