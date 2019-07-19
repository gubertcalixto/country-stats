import {Component, Input, OnInit} from '@angular/core';
import {CsBase} from "../../shared/cs-base.component";
import {Linguagem} from "../../../swagger/swag-proxy";

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
    this.languages.forEach(lg => {
      lg.nome = this.keyToTranslate('languages', lg.nome);
    });
    this.languagesShowed = this.languages.filter(c => c.oficial);
  }

}
