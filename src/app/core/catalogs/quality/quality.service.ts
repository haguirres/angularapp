import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IQuality } from './IQuality';
import { apiCataloguesUrl } from '../../../shared/apiCataloguesUrls';

@Injectable()
export class QualityService {

  constructor(private http: HttpClient) { }

  public getQualities(): Observable<IQuality[]> {
    return this.http.get<IQuality[]>(apiCataloguesUrl.quality);
  }

}
