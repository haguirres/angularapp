import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IIncident } from './IIncident';
import { apiCataloguesUrl } from '../../../shared/apiCataloguesUrls';

@Injectable()
export class IncidentService {

  constructor(private http: HttpClient) { }

  public getIncidents(): Observable<IIncident[]> {
    return this.http.get<IIncident[]>(apiCataloguesUrl.incident);
  }

}
