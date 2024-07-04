import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CardserviceService } from '../../services/cardservice.service';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css'
})
export class RoomsComponent {
  roomslist: any[] = [];
  constructor(private httpClient: HttpClient, public cardservice: CardserviceService) { }
  ngOnInit(): void {
    this.getroomsList();
  }
  getroomsList(): void {
    this.httpClient.get('https://hotelbooking.stepprojects.ge/api/Rooms/GetAll')
      .subscribe((result: any) => {
        this.roomslist = result;
        console.log(result)
      });
  }

}
