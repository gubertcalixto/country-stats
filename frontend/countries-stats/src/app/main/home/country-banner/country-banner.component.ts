import { Component, Input, OnInit } from '@angular/core';
import { CsBase } from 'src/app/shared/cs-base.component';
import { environment } from 'src/environments/environment';
import { PaisView } from 'src/swagger/swag-proxy';
import UnsplashSearch from 'unsplash-search';
import {Router} from "@angular/router";

@Component({
  selector: 'cs-country-banner',
  templateUrl: './country-banner.component.html',
  styleUrls: ['./country-banner.component.scss']
})
export class CountryBannerComponent extends CsBase implements OnInit {

  @Input() country: PaisView;
  countryBackground: CountryBackground;
  constructor(private router: Router) {
    super();
  }

  ngOnInit() {
    this.unsplashSearch()
  }
  openDetails() {
    this.router.navigateByUrl('/country/' + this.country.siglaPais2Digitos);
  }
  private unsplashSearch() {
    if (environment.production) {
      const accessKey = '4fbf7a1532cb17d0b57ee994e6f40fe19e5387ee115433a7d34b1186c132a240';
      const provider = new UnsplashSearch(accessKey);
      provider
        .searchAll(this.country.nome, 1)
        .then(data => {
          if (data.images[0]) {
            this.countryBackground = new CountryBackground(
              data.images[0].author.name,
              data.images[0].urls.full,
              data.images[0].urls.creditLink
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

export class CountryBackground {
  authorName: string;
  backgroundImage: string;
  urlCredit: string;

  constructor(authorName: string, backgroundImage: string, urlCredit: string) {
    this.authorName = authorName;
    this.backgroundImage = backgroundImage;
    this.urlCredit = urlCredit;
  }
}
