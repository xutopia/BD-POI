import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../shared/services/store.service';
import { ApiService } from '../../shared/services/api.service';

@Component({
  selector: 'app-results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.css']
})
export class ResultsListComponent implements OnInit {
  results: any;

  constructor(
    private storeService: StoreService,
    private apiService: ApiService,
  ) { }

  ngOnInit() {
    this.results = this.storeService.fetchResults();
    console.log('this.results: ', this.results);
  }

}
