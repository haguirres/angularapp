import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IPoliticalParty } from './IPoliticalParty';
import { apiCataloguesUrl } from '../../../shared/apiCataloguesUrls';

@Injectable()
export class PoliticalPartyService {

  constructor(private http: HttpClient) { }

  public getPoliticalParties(): Observable<IPoliticalParty[]> {
    return this.http.get<IPoliticalParty[]>(apiCataloguesUrl.politicalParty);
  }

}
