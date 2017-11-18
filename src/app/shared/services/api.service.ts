import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpHeaders, HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { SearchResult } from '../models/search-result.model';
import { Query } from '../models/query.model';
import { QueryBuilderService } from './query-builder.service';

@Injectable()
export class ApiService {
  constructor(
    private http: HttpClient,
    private queryBuilder: QueryBuilderService,
  ) {}

  private setHeaders(): HttpHeaders {
    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };
    return new HttpHeaders(headers);
  }

  private handleErrors(error: any) {
    return Observable.throw(error);
  }

  getPlaces(query: Query, searchType: string): Observable<any> {
    const baseUrl = `${environment.url}/${searchType}/json`;
    const url = baseUrl + this.queryBuilder.createUrl(query);
    const headers = this.setHeaders();

    return this.http.get(`${url}&key=${environment.PLACES_API_KEY}`)
            .catch(this.handleErrors)
            .map((res: Response) => res);
  }
}
