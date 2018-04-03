import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IPoliticalViolence } from './IPoliticalViolence';
import { Observable } from 'rxjs/Observable';
import { apiCataloguesUrl } from '../../../shared/apiCataloguesUrls';

@Injectable()
export class PoliticalViolenceService {

  constructor(private http: HttpClient) { }

  public getPoliticalViolence(): Observable<IPoliticalViolence[]> {
    return this.http.get<IPoliticalViolence[]>(apiCataloguesUrl.politicalViolence);
  }
}
