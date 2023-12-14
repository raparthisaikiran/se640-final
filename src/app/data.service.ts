import { Injectable } from '@angular/core';
import { Vehicle } from './app.component';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() { }
  vehicles:Vehicle[] = [
    {
      "id":1,
      "vehicle": "Toyota Corolla",
      "year": 2018,
      "price": 15000,
      "imageUrl":["https://shorturl.at/CFMSV","https://shorturl.at/CFMSV", "https://shorturl.at/CFMSV","https://shorturl.at/CFMSV","https://shorturl.at/CFMSV"],
      "location": {
        "latitude": "40.7128",
        "longitude": "-74.0060"
      },
      "ratings": {
        "Excellent": 25,
        "Good": 50,
        "Fair": 15,
        "Poor": 5,
        "Terrible": 5
      }
    },
    {
      "id":2,
      "vehicle": "Honda Civic",
      "year": 2020,
      "price": 18000,
      "imageUrl":["https://shorturl.at/CFMSV","https://shorturl.at/CFMSV", "https://shorturl.at/CFMSV","https://shorturl.at/CFMSV","https://shorturl.at/CFMSV"],
      "location": {
        "latitude": "34.0522",
        "longitude": "-118.2437"
      },
      "ratings": {
        "Excellent": 30,
        "Good": 40,
        "Fair": 20,
        "Poor": 5,
        "Terrible": 5
      }
    },
    {
      "id":3,
      "vehicle": "Ford Mustang",
      "year": 2016,
      "price": 25000,
      "imageUrl":["https://shorturl.at/CFMSV","https://shorturl.at/CFMSV", "https://shorturl.at/CFMSV","https://shorturl.at/CFMSV","https://shorturl.at/CFMSV"],
      "location": {
        "latitude": "41.8781",
        "longitude": "-87.6298"
      },
      "ratings": {
        "Excellent": 20,
        "Good": 35,
        "Fair": 25,
        "Poor": 10,
        "Terrible": 10
      }
    }
]

  getVehicles():Vehicle[]{
    return this.vehicles;
  }

 
   filterVehicles(name:string, minPrice:number, maxPrice:number) {
    return this.vehicles.filter(item => {
      const matchesName = name ? item.vehicle.toLowerCase().includes(name.toLowerCase()) : true;
      const matchesMinPrice = minPrice ? item.price >= minPrice : true;
      const matchesMaxPrice = maxPrice ? item.price <= maxPrice : true;
      return matchesName && matchesMinPrice && matchesMaxPrice;
    });
  }
  updateVehicle(data:Vehicle){
    this.vehicles.filter((vehicle:Vehicle)=>{
      if(vehicle.id== data.id){
        vehicle.ratings = data.ratings;
      }
    })
  }
}
