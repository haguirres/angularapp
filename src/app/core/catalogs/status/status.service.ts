import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IStatus } from './IStatus';
import { apiCataloguesUrl } from '../../../shared/apiCataloguesUrls';

@Injectable()
export class StatusService {

  constructor(private http: HttpClient) { }

  public getStatuses(): Observable<IStatus[]> {
    return this.http.get<IStatus[]>(apiCataloguesUrl.status);
  }

}
