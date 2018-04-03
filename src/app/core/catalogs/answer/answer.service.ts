import { Injectable } from '@angular/core';
import { IAnswer } from './IAnswer';
import { Observable } from 'rxjs/Observable';
import { apiCataloguesUrl } from '../../../shared/apiCataloguesUrls';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AnswerService {

  constructor(private http: HttpClient) { }

  public getAnswers(): Observable<IAnswer[]> {
    return this.http.get<IAnswer[]>(apiCataloguesUrl.answer);
  }

}
