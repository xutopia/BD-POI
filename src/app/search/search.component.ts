import { Component, OnInit } from '@angular/core';
// import { Store } from "@ngrx/store";
// import { State } from '../shared/models/state.model';
// import { SearchAction } from '../shared/actions/index.actions';
import { ApiService } from '../shared/services/api.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getPlaces();
  }

  getPlaces(): void {
    this.apiService.getPlaces({queryText: '369+lexington'}, 'textsearch')
      .subscribe(data => {
        console.log('inside the getPlaces method, looking at data: ', data);
      })
    // this.store.dispatch(new SearchAction('365+lexington'));
    // this.store.dispatch({
    //   type: 'SEARCH',
    //   payload: {
    //     queryText: '369+Lexington',
    //   }
    // })
  }

}
