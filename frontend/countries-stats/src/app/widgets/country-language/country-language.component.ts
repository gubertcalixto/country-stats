import {Component, Input, OnInit} from '@angular/core';
import {CsBase} from "../../shared/cs-base.component";
import {Linguagem, Moeda} from "../../../swagger/swag-proxy";

@Component({
  selector: 'cs-country-language',
  templateUrl: './country-language.component.html',
  styleUrls: ['./country-language.component.scss']
})
export class CountryLanguageComponent extends CsBase implements OnInit {
  @Input() languages: Linguagem[];
  languagesShowed: Linguagem[] = [];

  constructor(){
    super();
  };

  ngOnInit() {
    this.languagesShowed = this.languages.filter(c => c.oficial);
  }

}
