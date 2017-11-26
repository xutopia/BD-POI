import { Component, OnInit } from '@angular/core';

import { StoreService } from '../../shared/services/store.service';
import { Marker } from '../../shared/models/marker.model';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  markers: Array<Marker>;
  lat: number = 41.0157;
  lng: number = -74.20911;

  constructor(
    private storeService: StoreService,
  ) { }

  ngOnInit() {
  }

  updateMarkers(): void {
    this.markers = this.storeService.getMarkers();
  }
}
