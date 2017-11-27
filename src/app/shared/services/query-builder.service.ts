import { Injectable } from '@angular/core';

import { Query } from '../models/query.model';

@Injectable()
export class QueryBuilderService {
  createUrl(query: Query): string {
    let url: string = `?query=${query.queryText}&type=${query.type || ''}&radius=${query.radius}`;

    if (query.opennow) {
      url = `${url}&opennow`;
    }

    return url;
  }
}
