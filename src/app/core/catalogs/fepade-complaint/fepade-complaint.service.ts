import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IFepadeComplaint } from './IFepadeComplaint';
import { apiCataloguesUrl } from '../../../shared/apiCataloguesUrls';

@Injectable()
export class FepadeComplaintService {

  constructor(private http: HttpClient) { }

  public getFepadeComplaints(): Observable<IFepadeComplaint[]> {
    return this.http.get<IFepadeComplaint[]>(apiCataloguesUrl.complaintFepade);
  }

}
