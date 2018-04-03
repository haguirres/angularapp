import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { apiCataloguesUrl } from '../../../shared/apiCataloguesUrls';
import { IState } from './IState';

@Injectable()
export class StateService {

  constructor(private http: HttpClient) { }

  public getStates(idCountry: number): Observable<IState[]> {
    const params = new HttpParams().set('IdPais', idCountry.toString());
    return this.http.get<IState[]>(apiCataloguesUrl.state, {params});
  }

}
