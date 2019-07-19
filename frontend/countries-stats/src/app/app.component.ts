import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { isNullOrUndefined } from 'util';

import { storageConsts } from './shared/consts';
import { CsBase } from './shared/cs-base.component';

@Component({
  selector: 'cs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends CsBase implements OnInit {
  constructor(private router: Router, private httpClient: HttpClient) {
    super();
  }

  ngOnInit(): void {
    if (isNullOrUndefined(localStorage.getItem('userLocation.countryCode'))) {
      this.httpClient.get('http://ip-api.com/json').subscribe(result => {
        localStorage.setItem(storageConsts.countryCode, result['countryCode']);
        localStorage.setItem(storageConsts.latitude, result['lat']);
        localStorage.setItem(storageConsts.longitude, result['lon']);
      });
    }
  }


  signin() {
    this.router.navigateByUrl('/account/login');
  }

  signup() {
    this.router.navigateByUrl('/account/signup');
  }
}