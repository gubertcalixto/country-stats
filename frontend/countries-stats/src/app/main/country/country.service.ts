import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

import { CountryBaseResponse, CountryServiceProxy, GetAllPaisResponse, PaisView } from '../../../swagger/swag-proxy';
import {isNullOrUndefined} from "util";

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private countriesList: CountryBaseResponse[];

  constructor(private countryServiceProxy: CountryServiceProxy) { }

  public getAllCountries(nameFilter: string, skipCount: number, maxCount: number, orderByField): Observable<GetAllPaisResponse[]> {
    return this.countryServiceProxy.getAll(nameFilter, skipCount, maxCount, orderByField);
  }
  public getCountry(name: string, iso2: string): Observable<PaisView> {
    if(isNullOrUndefined(name)){
      name = undefined;
    }
    if(isNullOrUndefined(iso2)){
      iso2 = undefined;
    }
    return this.countryServiceProxy.get(name, iso2);
  }
  public getCountriesList(): Observable<CountryBaseResponse[]> {
    if (!this.countriesList)
      return this.countryServiceProxy.getCountriesList().pipe(tap(result => this.countriesList = result));
    return of(this.countriesList);
  }
}
