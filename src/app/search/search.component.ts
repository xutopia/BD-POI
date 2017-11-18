import { Component, OnInit } from '@angular/core';

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
  }

}
