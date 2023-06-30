import { Injectable } from '@angular/core';

declare const google: any;

@Injectable({
  providedIn: 'root'
})
export class GooglePlacesService {
  private placesService: any;

  constructor() {
    this.placesService = new google.maps.places.AutocompleteService();
  }

  getPlacePredictions(input: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.placesService.getPlacePredictions(
        { input: input },
        (predictions: any[], status: string) => {
          if (status !== 'OK') {
            reject(new Error('Place predictions request failed'));
          } else {
            resolve(predictions);
          }
        }
      );
    });
  }
}
