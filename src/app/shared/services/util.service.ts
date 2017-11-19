import { Injectable } from '@angular/core';

@Injectable()
export class UtilService {
  constructor() {}

  extractPhotoIds(photos: Array<any>): Array<string> {
    return photos.map(photo => {
      return photo.photo_reference;
    });
  }
}
