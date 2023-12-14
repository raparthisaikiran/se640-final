import { Component } from '@angular/core';

interface Location{
  latitude:string,
  longitude:string
}
interface Ratings{
  Excellent:number,
  Good:number,
  Fair:number,
  Poor:number,
  Terrible:number
}
export interface Vehicle{
  id:number,
  vehicle:string,
  year:number,
  price:number,
  location:Location,
  ratings:Ratings
  imageUrl:string[]
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Replacement';
  
}
