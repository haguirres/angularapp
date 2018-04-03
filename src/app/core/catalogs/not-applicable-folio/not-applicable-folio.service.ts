import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { INotApplicableFolio } from './INotApplicableFolio';
import { apiCataloguesUrl } from '../../../shared/apiCataloguesUrls';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class NotApplicableFolioService {

  constructor(private http: HttpClient) { }

  public getNotApplicableFolios(): Observable<INotApplicableFolio[]> {
    return this.http.get<INotApplicableFolio[]>(apiCataloguesUrl.notApplicableFolio);
  }
}
