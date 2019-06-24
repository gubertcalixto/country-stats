import { Component, OnInit } from '@angular/core';
import { CsBase } from 'src/app/shared/cs-base.component';
import {ActivatedRoute, Router} from "@angular/router";
import {CountryService} from "./country.service";
import {PaisView} from "../../../swagger/swag-proxy";
import {MapCoordinate} from "../../widgets/map-widget/map";
import {BreakpointObserver} from "@angular/cdk/layout";
import {BreakpointState} from "@angular/cdk/typings/layout";

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss']
})
export class CountryDetailsComponent extends CsBase implements OnInit {
  country: PaisView;
  backgroundImage = '/assets/images/country_details.jpg';
  mapCoordinate: MapCoordinate[];
  isSmallScreen: boolean;
  isMediumScreen: boolean;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private countryService: CountryService,
              private breakpointObserver: BreakpointObserver) {
    super();
  }

  ngOnInit() {
    this.breakpointObserver.observe(['(max-width: 599px)'])
      .subscribe((state: BreakpointState) => {
        this.isSmallScreen = state.matches;
      });
    this.breakpointObserver.observe(['(min-width: 600px)','(max-width: 768px)'])
      .subscribe((state: BreakpointState) => {
        this.isMediumScreen = state.breakpoints['(min-width: 600px)'] && state.breakpoints['(max-width: 768px)']
      });
    const countryIso2 = this.route.snapshot.paramMap.get("countryIso");
    if(countryIso2 == null){
      this.router.navigateByUrl('/');
      return;
    }
    this.countryService.getCountry(null, countryIso2).subscribe(result => {
      this.country = result;
      this.mapCoordinate = [{
        name: this.country.nome,
        latitude: Number(this.country.localizacao.latitude),
        longitude: Number(this.country.localizacao.longitude),
        fitBounds: true
      }];
    });
  }
}
