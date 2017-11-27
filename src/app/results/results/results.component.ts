import { Component, OnInit } from '@angular/core';

import { StoreService } from '../../shared/services/store.service';
import { Marker } from '../../shared/models/marker.model';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  markers: Array<Marker> = [
    {
      latitude: 0,
      longitude: 0
    }
  ];
  lat: number = this.markers[0].latitude;
  lng: number = this.markers[0].longitude;

  constructor(
    private storeService: StoreService,
  ) { }

  ngOnInit() {
    // this.markers = this.storeService.getMarkers();
    // console.log('when do I see this markers: ', this.markers);
  }

  markerUpdate(event): void {
    this.markers = this.storeService.getMarkers();
    console.log('this.markers: ', this.markers);
  }
}
