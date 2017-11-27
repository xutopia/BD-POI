import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpHeaders, HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
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

  private handleErrors(error: any) {
    return Observable.throw(error);
  }

  getPlaces(query: Query, searchType: string = 'textsearch'): Observable<any> {
    const baseUrl = `${environment.url}/${searchType}/json`;
    const url = baseUrl + this.queryBuilder.createUrl(query);


    if (query.locationText) {
      const geocodeUrl = `${environment.geocodeUrl}address=${query.locationText}&key=${environment.PLACES_API_KEY}`
      return this.http.get(geocodeUrl).flatMap((data: any) => {
        const urlWithLocation = `${url}&location=${data.results[0].geometry.location.lat},${data.results[0].geometry.location.lng}`;

        return this.http.get(`${urlWithLocation}&key=${environment.PLACES_API_KEY}`)
                .catch(this.handleErrors)
                .map((res: Response) => res);
      });
    } else {
      return this.http.get(`${url}&key=${environment.PLACES_API_KEY}`)
      .catch(this.handleErrors)
      .map((res: Response) => res);
    }
  }

  getDetails(id: string): Observable<any> {
    const url = `${environment.detailsUrl}placeid=${id}&key=${environment.PLACES_API_KEY}`;

    return this.http.get(url)
      .catch(this.handleErrors)
      .map((res: Response) => res);
  }

  getNextResults(token: string): Observable<any> {
    const url = `${environment.url}/textsearch/json?pagetoken=${token}&key=${environment.PLACES_API_KEY}`;

    return this.http.get(url)
            .catch(this.handleErrors)
            .map((res: Response) => res);
  }
}
