import { Component, OnInit } from '@angular/core';

import { CsBase } from '../../shared/cs-base.component';

@Component({
  selector: 'cs-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent extends CsBase implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }
}
