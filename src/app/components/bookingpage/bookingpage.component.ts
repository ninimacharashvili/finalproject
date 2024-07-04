import { Component, inject } from '@angular/core';
import { CardserviceService } from '../../services/cardservice.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-bookingpage',
  templateUrl: './bookingpage.component.html',
  styleUrl: './bookingpage.component.css'
})
export class BookingpageComponent {
  Http: any;
  dataService: any;
  constructor( public cardservice: CardserviceService, Http : HttpClient){ 
   console.log(cardservice.bookinginfo.images)
   }

   addtobookedrooms() {
    let room = {
      "id": 0,
      "roomID": 0,
      "checkInDate": "2024-07-01T19:03:40.330Z",
      "checkOutDate": "2024-07-01T19:03:40.330Z",
      "totalPrice": 0,
      "isConfirmed": true,
      "customerName": "string",
      "customerId": "string",
      "customerPhone": "string"
    };

    this.Http.post('https://hotelbooking.stepprojects.ge/api/Booking', room)
      .subscribe(
        (        response: any) => {
          console.log('POST request successful:', response);

        },
        (        error: any) => {
          console.error('Error occurred:', error);
        }
      );
  }
    }




