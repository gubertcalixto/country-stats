import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

import { CsBase } from '../../shared/cs-base.component';

@Component({
  selector: 'cs-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent extends CsBase {
  logged: any;
  @Output() sidebarToggle = new EventEmitter<any>(); navLinks: any[];

  constructor(private router: Router) {
    super();
    this.navLinks = [
      { label: this.l('Home'), link: '/home' },
      // { label: this.l('Settings'), link: '/settings' },
      // { label: this.l('Admin'), link: '/admin' },
    ];
  }

  signin() {
    this.router.navigateByUrl('/account/login');
  }

  signup() {
    this.router.navigate(['/', 'account/', 'signup']);
  }

  onToggleSidebar() {
    this.sidebarToggle.emit();
  }

}
