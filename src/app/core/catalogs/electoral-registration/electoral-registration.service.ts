import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IElectoralRegistration } from './IElectoralRegistration';
import { apiCataloguesUrl } from '../../../shared/apiCataloguesUrls';

@Injectable()
export class ElectoralRegistrationService {

  constructor(private http: HttpClient) { }

  public getElectoralRegistrations(): Observable<IElectoralRegistration[]> {
    return this.http.get<IElectoralRegistration[]>(apiCataloguesUrl.electoralRegistration);
  }

}
