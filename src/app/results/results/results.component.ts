import { Component, OnInit } from '@angular/core';

import { StoreService } from '../../shared/services/store.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  constructor(
    private storeService: StoreService,
  ) { }

  ngOnInit() {
    console.log('no store :\(: ', this.storeService);
  }

}
