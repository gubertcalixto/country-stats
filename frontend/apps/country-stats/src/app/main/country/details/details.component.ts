import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cs-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  defaultBackgroundImage = 'apps/country-stats/src/assets/images/country - details.jpg';
  constructor() { }

  ngOnInit() {
  }

}
