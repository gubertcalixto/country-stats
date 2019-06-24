import {Component, Input, OnInit} from '@angular/core';
import {CsBase} from "../../shared/cs-base.component";
import {Eletricidade, Telefone} from "../../../swagger/swag-proxy";

@Component({
  selector: 'cs-country-eletricity',
  templateUrl: './country-eletricity.component.html',
  styleUrls: ['./country-eletricity.component.scss']
})
export class CountryEletricityComponent extends CsBase implements OnInit {
  @Input() eletricity: Eletricidade;

  constructor(){
    super();
  };

  ngOnInit() {
  }

}
