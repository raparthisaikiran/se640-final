import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent {
  vehicle!: string;
  price!: number;
  year!: number;

  constructor(private dataService: DataService) { }
  onSubmit() {

    this.dataService.vehicles.push({
      "id": this.dataService.vehicles.length+2,
      "vehicle": this.vehicle,
      "year": this.year,
      "price": this.price,
      "imageUrl": ["https://shorturl.at/CFMSV", "https://shorturl.at/CFMSV", "https://shorturl.at/CFMSV", "https://shorturl.at/CFMSV", "https://shorturl.at/CFMSV"],
      "location": {
        "latitude": "40.7128",
        "longitude": "-74.0060"
      },
      "ratings": {
        "Excellent": 0,
        "Good": 0,
        "Fair": 0,
        "Poor": 0,
        "Terrible": 0
      }
    })
    alert('Sucess');
    this.vehicle = '';
    this.price = 0;
    this.year = 0;
  }
}
