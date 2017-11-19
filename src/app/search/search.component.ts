import { Component, OnInit } from '@angular/core';
// import { Store } from "@ngrx/store";
// import { State } from '../shared/models/state.model';
// import { SearchAction } from '../shared/actions/index.actions';
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
  categorySelected: string = 'select';
  categories = CATEGORIES;
  maxPrice: number = 4;

  constructor(
    private apiService: ApiService,
    private storeService: StoreService,
  ) { }

  ngOnInit() {
    this.getPlaces();
  }

  getPlaces(): void {
    this.apiService.getPlaces({queryText: '369+lexington'}, 'textsearch')
      .subscribe(data => {
        console.log('inside the getPlaces method, looking at data: ', data);
        // TODO: check if valid results came back, store into results;
      })
  }

  setSelectedCategory(category: string): void {
    this.categorySelected = category;
  }

}
