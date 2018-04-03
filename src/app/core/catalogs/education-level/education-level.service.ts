import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEducationLevel } from './IEducationLevel';
import { Observable } from 'rxjs/Observable';
import { apiCataloguesUrl } from '../../../shared/apiCataloguesUrls';

@Injectable()
export class EducationLevelService {

  constructor(private http: HttpClient) { }

  public getEducationalLevels(): Observable<IEducationLevel[]> {
    return this.http.get<IEducationLevel[]>(apiCataloguesUrl.educationLevel);
  }
}
