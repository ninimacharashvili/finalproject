import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-booked-rooms',
  templateUrl: './booked-rooms.component.html',
  styleUrl: './booked-rooms.component.css'
})
export class BookedRoomsComponent {
 constructor(public Http : HttpClient){}



}
