import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IDependency } from './IDependency';
import { apiCataloguesUrl } from '../../../shared/apiCataloguesUrls';

@Injectable()
export class DependencyService {

  constructor(private http: HttpClient) { }

  public getDependencies(): Observable<IDependency[]> {
    return this.http.get<IDependency[]>(apiCataloguesUrl.dependency);
  }

}
