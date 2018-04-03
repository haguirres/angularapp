import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IServiceDesk } from './IServiceDesk';
import { apiCataloguesUrl } from '../../../shared/apiCataloguesUrls';

@Injectable()
export class ServiceDeskService {

  constructor(private http: HttpClient) { }

  public getServiceDesks(): Observable<IServiceDesk[]> {
    return this.http.get<IServiceDesk[]>(apiCataloguesUrl.serviceDesk);
  }

}
