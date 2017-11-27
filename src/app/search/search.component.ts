import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

import { Query } from '../shared/models/query.model';
import { ApiService } from '../shared/services/api.service';
import { StoreService } from '../shared/services/store.service';
import { CATEGORIES } from '../shared/categories';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  queryText: string = '';
  locationText: string = '';
  openNow: boolean = false;
  categorySelected: string = 'select category';
  categories = CATEGORIES;
  radius: number = 500;
  status: string= '';
  advSearchRef: NgbModalRef;
  @ViewChild('errContent') private errContent;
  @ViewChild('advSearch') private advSearch;

  constructor(
    private apiService: ApiService,
    private storeService: StoreService,
    private modalService: NgbModal,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  getPlaces(): void {
    let query: Query = this.constructQuery(this.queryText, this.locationText, this.radius, this.categorySelected, this.openNow);

    this.apiService.getPlaces(query, 'textsearch')
      .subscribe(data => {
        if (this.advSearchRef) {
          this.advSearchRef.close();
        }

        if (data.results.length) {
          this.storeService.addToSearchHistory(query);
          this.storeService.clearResults();
          this.storeService.addToResults(data.results);
          this.storeService.storeNextToken(data.next_page_token);
          this.router.navigateByUrl('/results');
        } else {
          this.status = data.status;
          this.openModal(this.errContent);
        }
      });
  }

  constructQuery(queryText: string, locationText: string, radius: number, type: string, opennow: boolean): Query {
    return {
      queryText,
      type: type === 'select category' ? '' : type,
      locationText,
      radius,
      opennow,
    }
  }

  setSelectedCategory(category: string): void {
    this.categorySelected = category;
  }

  resetSearch(): void {
    this.queryText = '';
    this.locationText = '';
    this.categorySelected = 'select category';
    this.openNow = false;
  }

  openModal(modal) {
    this.advSearchRef = this.modalService.open(modal);
  }
}
