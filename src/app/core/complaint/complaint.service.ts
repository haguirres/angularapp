import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IComplaint } from './IComplaint';
import { apiUrls } from '../../shared/apiUrls';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ComplaintService {

  constructor(private http: HttpClient) { }

  postComplaint(complaint: IComplaint): Observable<IComplaint> {
    return this.http.post<IComplaint>(apiUrls.urlComplaint, complaint);
  }

  getComplaint(complaint: IComplaint): Observable<IComplaint> {
    return this.http.get<IComplaint>(apiUrls.urlComplaint);
  }
}
