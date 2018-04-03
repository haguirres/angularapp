import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ITown } from './ITown';
import { apiCataloguesUrl } from '../../../shared/apiCataloguesUrls';

@Injectable()
export class TownService {

  constructor(private http: HttpClient) { }

  public getTowns(idState: number): Observable<ITown[]> {
    const params = new HttpParams().set('IdEstado', idState.toString());
    return this.http.get<ITown[]>(apiCataloguesUrl.town, {params});
 }

}
