import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CsBase } from './shared/cs-base.component';


@Component({
  selector: 'cs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends CsBase implements OnInit {
  constructor(@Inject(Router) private router: Router) {
    super();
  }

  ngOnInit(): void {
    // TODO RANDOM COUNTRY IMAGE
    // https://www.npmjs.com/package/node-shutter-search
    // const shutterSearch = require('shutter-search');
    // new shutterSearch('brazil').then((data) => {
    //   console.log(data);
    // });
  }


  signin() {
    this.router.navigateByUrl('/account/login');
  }

  signup() {

    this.router.navigateByUrl('/account/signup');
  }

}
