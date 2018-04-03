import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IOccupation } from './IOccupation';
import { apiCataloguesUrl } from '../../../shared/apiCataloguesUrls';

@Injectable()
export class OccupationService {

  constructor(private http: HttpClient) { }

  public getOccupations(): Observable<IOccupation[]> {
    return this.http.get<IOccupation[]>(apiCataloguesUrl.occupation);
  }

}
