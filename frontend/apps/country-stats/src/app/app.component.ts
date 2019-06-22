import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CsBase } from './shared/cs-base.component';
import {HttpClient} from "@angular/common/http";
import {isNullOrUndefined} from "util";
import { storageConsts } from './consts/consts';


@Component({
  selector: 'cs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends CsBase implements OnInit {
  constructor(@Inject(Router) private router: Router, @Inject(HttpClient) private httpClient: HttpClient) {
    super();
  }

  ngOnInit(): void {
      if(isNullOrUndefined(localStorage.getItem('userLocation.countryCode'))){
        this.httpClient.get('http://ip-api.com/json').subscribe(result => {
            localStorage.setItem(storageConsts.countryCode, result['countryCode']);
            localStorage.setItem(storageConsts.latitude, result['lat']);
            localStorage.setItem(storageConsts.longitude, result['lon']);
        });
    }
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
