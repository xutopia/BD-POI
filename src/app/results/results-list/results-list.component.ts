import { Component, OnInit } from '@angular/core';
import { StoreService } from '../../shared/services/store.service';
import { ApiService } from '../../shared/services/api.service';
import { UtilService } from '../../shared/services/util.service';

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
    private utilService: UtilService,
  ) { }

  ngOnInit() {
    this.results = this.storeService.fetchResults();
    console.log('this.results: ', this.results);
  }

  fetchDetails(id: string): void {
    this.storeService.clearDetails();
    this.apiService.getDetails(id)
      .subscribe(details => {
        console.log('inside the fetchDetails, looking at details: ', details);
        this.storeService.storeDetails(details);

        if (details.result.photos.length) {
          let photoIds = this.utilService.extractPhotoIds(details.result.photos);
          this.apiService.getPhotos(photoIds, 400)
          .subscribe(photos => {
            console.log('looking at photos: ', photos);
          })
        }
      })
  }

}
