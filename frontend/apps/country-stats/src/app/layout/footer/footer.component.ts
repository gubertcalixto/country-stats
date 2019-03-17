import { Component, OnInit } from '@angular/core';

import { CsBase } from '../../shared/cs-base.component';

@Component({
  selector: 'cs-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent extends CsBase implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
