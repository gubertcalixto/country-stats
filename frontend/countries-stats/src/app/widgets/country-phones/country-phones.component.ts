import {Component, Input, OnInit} from '@angular/core';
import {CsBase} from "../../shared/cs-base.component";
import {Telefone} from "../../../swagger/swag-proxy";

interface PhoneList {
  title: string;
  description: string;
  icon: string;
  colorClass: string;
}

@Component({
  selector: 'cs-country-phones',
  templateUrl: './country-phones.component.html',
  styleUrls: ['./country-phones.component.scss']
})
export class CountryPhonesComponent extends CsBase implements OnInit {
  @Input() phones: Telefone;
  telephones: PhoneList[];

  constructor(){
    super();
  };

  ngOnInit() {
    this.telephones = [
      {
        title: 'phones.phone',
        description: this.phones.codigoTelefone,
        icon: 'phone',
        colorClass: 'f-green'
      },
      {
        title: 'phones.police',
        description: this.phones.telefonePolicia,
        icon: 'security',
        colorClass: 'f-blue'
      },
      {
        title: 'phones.ambulance',
        description: this.phones.telefoneAmbulancia,
        icon: 'healing',
        colorClass: 'f-orange'
      },
      {
        title: 'phones.firemen',
        description: this.phones.telefoneBombeiros,
        icon: 'whatshot',
        colorClass: 'f-red'
      }
    ];
  }

}
