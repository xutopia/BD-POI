import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";

import { State } from '../shared/models/state.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.getPlaces();
  }

  getPlaces(): void {
    // this.apiService.getPlaces({queryText: '369+lexington'}, 'textsearch')
    //   .subscribe(data => {
    //     console.log('inside the getPlaces method, looking at data: ', data);
    //   })
    this.store.dispatch({
      type: 'SEARCH',
      payload: {
        queryText: 'something',
      }
    })
  }

}
