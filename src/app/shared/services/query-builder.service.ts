import { Injectable } from '@angular/core';

import { Query } from '../models/query.model';

@Injectable()
export class QueryBuilderService {
  createUrl(query: Query): string {
    let url: string = `?query=${query.queryText}&type=${query.type || ''}&minprice=${query.minprice || 0}&maxprice=${query.maxprice}`;

    if (query.opennow) {
      url = `${url}&opennow`;
    }
    
    return url;
  }
}



// params = new HttpParams()
// .set('query', `${query.queryText}`)
// .set('type', `${query.type || ''}`)
// .set('minprice', `${query.minprice || 0}`)
// .set('maxprice', `${query.maxprice || ''}`)
