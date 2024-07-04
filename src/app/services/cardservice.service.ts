import { HttpClient } from '@angular/common/http';
import { Injectable, numberAttribute } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CardserviceService {

  constructor() { }
  bookinginfo: any

  booking(info: any){
    this.bookinginfo = info
     console.log(this.bookinginfo)
  }
  cardservice = {
    bookinginfo: {
      name: 'Sample Hotel',
      images: [
        { source: 'path/to/first-image.jpg' } // Display only the first image
      ]
    }
  };
 
}
