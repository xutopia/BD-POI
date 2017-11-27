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
  lat: number;
  lng: number;
  zoom: number = 10;

  constructor(
    private storeService: StoreService,
  ) { }

  ngOnInit() {
  }

  markerUpdate(event): void {
    this.markers = this.storeService.getMarkers();
    this.lat = this.markers[0].latitude;
    this.lng = this.markers[0].longitude;
  }
}
