import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { CsBase } from '../../shared/cs-base.component';

@Component({
  selector: 'cs-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent extends CsBase implements OnInit {

  logged: any;
  @Output() sidebarToggle = new EventEmitter<any>();

  constructor() {
    super();
  }

  ngOnInit() {
  }

  signup() {

  }

  onToggleSidebar() {
    this.sidebarToggle.emit();
  }

}
