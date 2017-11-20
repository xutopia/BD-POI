import { Injectable } from '@angular/core';

@Injectable()
export class UtilService {
  constructor() {}

  paginateResults(results: Array<any>): Array<any> {
    let pagResults: Array<any> = [];
    let i: number;
    for (i = 0; i < results.length; i += 10) {
      pagResults.push(results.slice(i, i + 10));
    }

    if (results.length % (pagResults.length * 10)) {
      pagResults.push(results.slice(pagResults.length * 10));
    }

    return pagResults;
  }
}
