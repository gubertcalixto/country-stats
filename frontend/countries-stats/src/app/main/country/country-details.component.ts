import { Component, OnInit } from '@angular/core';
import { CsBase } from 'src/app/shared/cs-base.component';
import {ActivatedRoute, Router} from "@angular/router";
import {CountryService} from "./country.service";
import {PaisView} from "../../../swagger/swag-proxy";
import {MapCoordinate} from "../../widgets/map-widget/map";
import {BreakpointObserver} from "@angular/cdk/layout";
import {BreakpointState} from "@angular/cdk/typings/layout";
import {environment} from "../../../environments/environment";
import UnsplashSearch from "unsplash-search";
import {CountryBackground} from "../home/country-banner/country-banner.component";

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss']
})
export class CountryDetailsComponent extends CsBase implements OnInit {
  country: PaisView;
  mapCoordinate: MapCoordinate;
  isSmallScreen: boolean;
  isMediumScreen: boolean;
  countryBackground: CountryBackground;

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
      this.unsplashSearch();
      this.mapCoordinate = {
        name: this.country.nome,
        latitude: Number(this.country.localizacao.latitude),
        longitude: Number(this.country.localizacao.longitude),
        fitBounds: true
      };
    });
  }
  private unsplashSearch() {
    if (environment.production) {
      const accessKey = '4fbf7a1532cb17d0b57ee994e6f40fe19e5387ee115433a7d34b1186c132a240';
      const provider = new UnsplashSearch(accessKey);
      provider
        .searchAll(this.country.nome, 1)
        .then(data => {
          console.log(data.images[0]);
          if (data.images[0]) {
            this.countryBackground = new CountryBackground(
              data.images[0].author.name,
              data.images[0].urls.full,
              data.images[0].urls.creditLink
            );
          }
          else{
            this.countryBackground = new CountryBackground(
              null,
              '/assets/images/country_default_background.jpg',
              null
            );
          }
        });
    } else {
      this.countryBackground = new CountryBackground(
        null,
        '/assets/images/country_default_background.jpg',
        null
      );
    }
  }
}
