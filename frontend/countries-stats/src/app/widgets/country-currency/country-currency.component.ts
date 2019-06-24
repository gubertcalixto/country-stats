import {Component, Input, OnInit} from '@angular/core';
import {CsBase} from "../../shared/cs-base.component";
import {Moeda} from "../../../swagger/swag-proxy";

@Component({
  selector: 'cs-country-currency',
  templateUrl: './country-currency.component.html',
  styleUrls: ['./country-currency.component.scss']
})
export class CountryCurrencyComponent extends CsBase implements OnInit {
  @Input() currencies: Moeda[];
  currenciesShowed: Moeda[] = [];

  constructor(){
    super();
  };

  ngOnInit() {
    this.currenciesShowed = this.currencies.filter(c => c.principal);
  }

}
