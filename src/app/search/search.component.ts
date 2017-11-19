import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
// import { Store } from "@ngrx/store";
// import { State } from '../shared/models/state.model';
// import { SearchAction } from '../shared/actions/index.actions';
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
  categorySelected: string = 'select category';
  categories = CATEGORIES;
  maxPrice: number = 4;
  closeResult: string;
  @ViewChild('content') private content;

  constructor(
    private apiService: ApiService,
    private storeService: StoreService,
    private modalService: NgbModal,
  ) { }

  ngOnInit() {
  }

  getPlaces(): void {
    let query: Query = this.constructQuery(this.queryText, this.categorySelected, this.maxPrice);

    this.apiService.getPlaces(query, 'textsearch')
      .subscribe(data => {
        if (data.results.length) {
          this.storeService.addToSearchHistory(query);
          this.storeService.clearResults();
          this.storeService.addToResults(data.results);
          this.storeService.storeNextToken(data.next_page_token);
        } else {
          this.openModal(this.content);
        }
      })
  }

  constructQuery(queryText: string, type: string, maxprice: number): Query {

    return {
      queryText,
      type: type === 'select category' ? '' : type,
      maxprice,
    }
  }

  setSelectedCategory(category: string): void {
    this.categorySelected = category;
  }

  resetSearch(): void {
    this.queryText = '';
    this.categorySelected = 'select category';
    this.maxPrice = 4;
  }

  openModal(content) {
    this.modalService.open(content).result;
  }
}
