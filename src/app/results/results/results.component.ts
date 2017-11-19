import { Component, OnInit } from '@angular/core';

import { StoreService } from '../../shared/services/store.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  lat: number = 41.0157;
  lng: number = -74.20911;

  constructor(
    private storeService: StoreService,
  ) { }

  ngOnInit() {
    
  }

}
