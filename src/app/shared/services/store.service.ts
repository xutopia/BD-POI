import { Injectable } from '@angular/core';
import { Query } from '../models/query.model';
import { Marker } from '../models/marker.model';

@Injectable()
export class StoreService {
  private searchHistory: Array<any> = [];
  private results: Array<any> = [];
  private nextToken: string = '';
  private details: any = {};
  private errors: any = {};
  private photos: Array<string> = [];
  private markers: Marker[] =[];

  addToSearchHistory(query: Query | string): void {
    this.searchHistory.push(query);
  }

  fetchLastSearch(): Query | string {
    return this.searchHistory[this.searchHistory.length - 1];
  }

  addToResults(data: any): void {
    this.results.push(...data);
  }

  clearResults(): void {
    this.results = [];
  }

  fetchResults() {
    return this.results;
  }

  storeNextToken(token: string): void {
    this.nextToken = token;
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

  clearDetails(): void {
    this.details = {};
  }

  addMarkers(): void {
  }
}
