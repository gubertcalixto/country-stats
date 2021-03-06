import {Component, Input, OnInit} from '@angular/core';

import { CsBase } from '../../shared/cs-base.component';
import {Vacina} from "../../../swagger/swag-proxy";

@Component({
  selector: 'cs-country-vaccination',
  templateUrl: './country-vaccination.component.html',
  styleUrls: ['./country-vaccination.component.scss']
})
export class CountryVaccinationComponent extends CsBase implements OnInit {
  @Input() countryVaccinations: Vacina[];

  constructor() {
    super();
  }

  ngOnInit() {
    this.countryVaccinations.forEach(vc => {
      vc.observacoes = this.keyToTranslate('vaccinations', vc.nome);
      vc.nome = this.keyToTranslate('vaccinations.vaccinationsName', vc.nome);
    })
  }

}
