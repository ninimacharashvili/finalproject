import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrl: './hotels.component.css'
})
export class HotelsComponent {
  hotellist: any[] = []; 
  
  constructor(private httpClient: HttpClient) { }
  
  ngOnInit(): void {
    this.getHotelList(); 
  }
  
  getHotelList(): void {
    this.httpClient.get('https://hotelbooking.stepprojects.ge/api/Hotels/GetAll')
      .subscribe((result: any) => {
        this.hotellist = result;
      });
  }

}

function push(arg0: any) {
  throw new Error('Function not implemented.');
}

