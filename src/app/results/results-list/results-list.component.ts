import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { StoreService } from '../../shared/services/store.service';
import { ApiService } from '../../shared/services/api.service';
import { UtilService } from '../../shared/services/util.service';
import { Filter } from '../../shared/models/filter.model';

@Component({
  selector: 'app-results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.css']
})
export class ResultsListComponent implements OnInit {
  results: Array<any>;
  pagResults: Array<any>;
  currentPagResults: Array<any>;
  // filteredPagResults: Array<any>;
  name: string = 'Establishment Name';
  formatted_address: string = 'Address Unavailable';
  formatted_phone_number: string = 'Phone Number Unavailable';
  business_hours: Array<string> = ['No Business Hours to Show'];
  website: string = 'No Website Address Listed';
  page: number = 1;
  filters: Array<Filter> = [];
  @ViewChild('detailsContent') private detailsContent;
  @ViewChild('noDetails') private noDetails;

  constructor(
    private storeService: StoreService,
    private apiService: ApiService,
    private utilService: UtilService,
    private modalService: NgbModal,
  ) { }

  ngOnInit() {
    this.results = this.storeService.fetchResults();
    if (this.results.length > 10) {
      this.pagResults = this.utilService.paginateResults(this.results);
    } else {
      this.pagResults = this.results;
    }
    this.currentPagResults = this.pagResults[0];
    this.updateFilters();
  }

  // updateCurrentPagResults(name: string): void {
  //   // console.log('clicekd teh fucking checkbox: ', this.filters);
  //   this.filters[name] = !this.filters[name];
  //   if (this.filters[name])
  //   this.filteredPagResults = this.currentPagResults.filter(result => {
  //     return this.filters[result.types[0]];
  //   });
  // }

  loadPage(page: number) {
    this.currentPagResults = this.pagResults[page - 1];
    this.updateFilters();
    if (this.results.length - (page * 10) >= 0 && this.results.length - (page * 10) < 10) {
      if (this.storeService.getNextToken()) {
        let nextToken = this.storeService.getNextToken();
        this.apiService.getNextResults(nextToken)
          .subscribe(data => {
            if (data.results.length) {
              this.storeService.addToResults(data.results);
              this.storeService.storeNextToken(data.next_page_token);
              this.results = this.storeService.fetchResults();
              this.pagResults = this.utilService.paginateResults(this.results);
            }
          });
      }
    }
  }

  updateFilters(): void {
    let filterNames = new Set();
    this.currentPagResults.forEach(result => {
      if (result.types[0]) {
        filterNames.add(result.types[0]);
      }
    });
    let names = Array.from(filterNames);
    this.filters = names.map(name => {
      return {
        name,
        isSelected: false,
      }
    });
    console.log('this.filters: ', this.filters);
  }

  // objectkeys(obj): Array<string> {
  //   return Object.keys(obj);
  // }

  fetchDetails(id: string): void {
    this.storeService.clearDetails();
    this.apiService.getDetails(id)
      .subscribe(details => {
        console.log('inside the fetchDetails, looking at details: ', details);
        if (details.status === 'OK') {
          this.storeService.storeDetails(details.result);
          this.name = details.result.name;
          this.formatted_address = details.result.formatted_address;
          this.formatted_phone_number = details.result.formatted_phone_number;
          this.business_hours = details.result.opening_hours && details.result.opening_hours.weekday_text ? details.result.opening_hours.weekday_text : this.business_hours;
          this.website = details.result.website;
          this.modalService.open(this.detailsContent);
        } else {
          this.modalService.open(this.noDetails);
        }
      });
  }

}
