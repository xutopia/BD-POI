import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';

import { Query } from '../models/query.model';

@Injectable()
export class QueryBuilderService {
  createParams(query: Query): HttpParams {
    let params;

    if (query.opennow) {
      params = new HttpParams()
        .set('query', `${query.queryText || 'food near me'}`)
        .set('type', `${query.type || ''}`)
        .set('minprice', `${query.minprice || 0}`)
        .set('maxprice', `${query.maxprice || ''}`)
        .set('opennow', `${query.opennow}`)
    } else {
      params = new HttpParams()
        .set('query', `${query.queryText}`)
        .set('type', `${query.type || ''}`)
        .set('minprice', `${query.minprice || 0}`)
        .set('maxprice', `${query.maxprice || ''}`)
    }
    return params;
  }
}
