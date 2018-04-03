import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IElectoralElection } from './IElectoralElection';
import { apiCataloguesUrl } from '../../../shared/apiCataloguesUrls';

@Injectable()
export class ElectoralElectionService {

  constructor(private http: HttpClient) { }

  public getElectoralElections(): Observable<IElectoralElection[]> {
    return this.http.get<IElectoralElection[]>(apiCataloguesUrl.electoralElection);
  }
}
