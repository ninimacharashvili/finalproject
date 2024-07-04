import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import { HotelsComponent } from './components/hotels/hotels.component';
import { BookedRoomsComponent } from './components/booked-rooms/booked-rooms.component';
import { BookingpageComponent } from './components/bookingpage/bookingpage.component';


const routes: Routes = [

{path:'', component: HomeComponent},
{path:'rooms', component: RoomsComponent},
{path:'hotels', component: HotelsComponent},
{path:'booked-rooms', component: BookedRoomsComponent},
{path: 'bookingpage', component: BookingpageComponent}
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
