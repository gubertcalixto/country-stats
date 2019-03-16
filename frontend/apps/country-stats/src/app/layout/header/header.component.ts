import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cs-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  logged: any;

  constructor() { }

  ngOnInit() {
  }

}
