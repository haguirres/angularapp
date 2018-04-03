import { Injectable } from '@angular/core';
import { ICountry } from './ICountry';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { apiUrls } from '../../../shared/apiUrls';
import { apiCataloguesUrl } from '../../../shared/apiCataloguesUrls';

@Injectable()
export class CountryService {

  constructor(private http: HttpClient) { }

  public getCountries(): Observable<ICountry[]> {
    return this.http.get<ICountry[]>(apiCataloguesUrl.country);
  }
}
