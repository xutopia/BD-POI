import { Injectable } from '@angular/core';
import { Query } from '../models/query.model';

@Injectable()
export class StoreService {
  searchHistory: Array<any> = [];
  results: Array<any> = [];
  details: any = {};
  errors: any = {};
  photos: Array<string> = [];

  addToSearchHistory(query: Query | string): void {
    this.searchHistory.push(query);
  }

  fetchLastSearch(): Query | string {
    return this.searchHistory[this.searchHistory.length - 1];
  }

  addToResults(data: any): void {
    this.results.push(data);
  }

  fetchResults() {
    return this.results;
  }

  storeDetails(data: any): void {
    this.details = data;
  }

  fetchDetails() {
    if (this.details) {
      return this.details
    } else {
      throw Error('no details to show');
    }
  }

}
