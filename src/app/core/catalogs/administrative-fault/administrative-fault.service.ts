import { Injectable } from '@angular/core';
import { IAdministrativeFault } from './IAdministrativeFault';
import { HttpClient } from '@angular/common/http';
import { apiUrls } from '../../../shared/apiUrls';
import { Observable } from 'rxjs/Observable';
import { apiCataloguesUrl } from '../../../shared/apiCataloguesUrls';

@Injectable()
export class AdministrativeFaultService {

  constructor(private http: HttpClient) { }

  public getAdministrativeFaults(): Observable<IAdministrativeFault[]> {
    return this.http.get<IAdministrativeFault[]>(apiCataloguesUrl.administrativeFault);
  }
}
