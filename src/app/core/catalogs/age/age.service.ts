import { Injectable } from '@angular/core';
import { IAge } from './IAge';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { apiCataloguesUrl } from '../../../shared/apiCataloguesUrls';

@Injectable()
export class AgeService {

  constructor(private http: HttpClient) { }

  public getAges(): Observable<IAge[]> {
    return this.http.get<IAge[]>(apiCataloguesUrl.age);
  }
}
