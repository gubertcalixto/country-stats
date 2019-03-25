import { Component } from '@angular/core';

import { CsBase } from './shared/cs-base.component';

@Component({
  selector: 'cs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends CsBase {
  constructor() {
    super();
  }
}
