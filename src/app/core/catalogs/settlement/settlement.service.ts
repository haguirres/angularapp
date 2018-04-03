import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ISettlement } from './ISettlement';
import { apiCataloguesUrl } from '../../../shared/apiCataloguesUrls';

@Injectable()
export class SettlementService {

  constructor(private http: HttpClient) { }

  public getSettlements(idState: number, idTown: number): Observable<ISettlement[]> {
    const params = new HttpParams().set('IdMunicipio', idTown.toString()).set('IdEstado', idState.toString());
    return this.http.get<ISettlement[]>(apiCataloguesUrl.settlement, {params});
  }

  public getSettlementByPostalCode(idPostalCode: number): Observable<ISettlement[]> {
    const params = new HttpParams().set('codigoPostal', idPostalCode.toString());
    return this.http.get<ISettlement[]>(apiCataloguesUrl.settlement, {params});
  }
}
