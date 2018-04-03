import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IGender } from './IGender';
import { apiCataloguesUrl } from '../../../shared/apiCataloguesUrls';

@Injectable()
export class GenderService {

  constructor(private http: HttpClient) { }

  public getGenders(): Observable<IGender[]> {
    return this.http.get<IGender[]>(apiCataloguesUrl.gender);
  }

}
