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
      "imageUrl":["https://shorturl.at/CFMSV","https://shorturl.at/CFMSV", "https://shorturl.at/lqyHJ","https://rb.gy/o4chy8","https://shorturl.at/CFMSV"],
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
      "imageUrl":["https://shorturl.at/CFMSV","https://shorturl.at/CFMSV", "https://shorturl.at/CFMSV","https://rb.gy/o4chy8","https://shorturl.at/CFMSV"],
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
      "imageUrl":["https://shorturl.at/CFMSV","https://shorturl.at/CFMSV", "https://shorturl.at/lqyHJ","https://shorturl.at/CFMSV","https://shorturl.at/CFMSV"],
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
    },
    
    {
      "id":4,
      "vehicle": "Dodge Charger R/T",
      "year": 2020,
      "price": 12000,
      "imageUrl":["https://shorturl.at/hsxBZ","https://shorturl.at/lqyHJ","https://shorturl.at/lqyHJ","https://shorturl.at/lqyHJ"],
      "location": {
        "latitude": "55.7128",
        "longitude": "-64.0060"
      },
      "ratings": {
        "Excellent": 0,
        "Good": 0,
        "Fair": 0,
        "Poor": 0,
        "Terrible": 0
      }
    },
    {
      "id":5,
      "vehicle": "Chevrolet Silverado",
      "year": 2022,
      "price": 30000,
      "imageUrl":["https://shorturl.at/oADEP","https://rb.gy/mbrhag", "https://rb.gy/o4chy8", "https://rb.gy/o4chy8"],
      "location": {
        "latitude": "31.81710",
        "longitude": "-171.07580"
      },
      "ratings": {
        "Excellent": 0,
        "Good": 0,
        "Fair": 0,
        "Poor": 0,
        "Terrible": 0
      }
    },

    {
      "id":6,
      "vehicle": "Ford F-series",
      "year": 2015,
      "price": 28000,
      "imageUrl":["https://t.ly/ydVNc","https://t.ly/5m-Os", "https://t.ly/NjRcL","https://t.ly/K2XOW"],
      "location": {
        "latitude": " 20.08595",
        "longitude": "-96.434840"
      },
      "ratings": {
        "Excellent": 0,
        "Good": 0,
        "Fair": 0,
        "Poor": 0,
        "Terrible": 0
      }
    },
    {
      "id":7,
      "vehicle": "Honda CR-V",
      "year": 2009,
      "price": 5000,
      "imageUrl":["https://rb.gy/wjt116","https://rb.gy/bnhrzl", "https://shorturl.at/gmpQU","https://shorturl.at/ckvLV"],
      "location": {
        "latitude": "25.0078",
        "longitude": "-45.0060"
      },
      "ratings": {
        "Excellent": 0,
        "Good": 0,
        "Fair": 0,
        "Poor": 0,
        "Terrible": 0
      }
    },
    
    {
      "id":8,
      "vehicle": "GMC Sieera",
      "year": 2013,
      "price": 14000,
      "imageUrl":["https://shorturl.at/tJRV0","https://shorturl.at/fhjQ1", "https://shorturl.at/bdswR","https://t.ly/9mj79"],
      "location": {
        "latitude": "30.7128",
        "longitude": "-34.0060"
      },
      "ratings": {
        "Excellent": 0,
        "Good": 0,
        "Fair": 0,
        "Poor": 0,
        "Terrible": 0
      }
    },

    {
      "id":9,
      "vehicle": "Tesla Model Y",
      "year": 2018,
      "price": 2200,
      "imageUrl":["https://shorturl.at/CFMSV","https://shorturl.at/CFMSV", "https://shorturl.at/CFMSV","https://shorturl.at/CFMSV","https://shorturl.at/CFMSV"],
      "location": {
        "latitude": "54.000",
        "longitude": "-33.0060"
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
      "id":10,
      "vehicle": "Toyota Highlander",
      "year": 2015,
      "price": 3200,
      "imageUrl":["https://shorturl.at/CFMSV","https://shorturl.at/CFMSV", "https://shorturl.at/CFMSV","https://shorturl.at/CFMSV","https://shorturl.at/CFMSV"],
      "location": {
        "latitude": "35.7128",
        "longitude": "-72.0060"
      },
      "ratings": {
        "Excellent": 0,
        "Good": 0,
        "Fair": 0,
        "Poor": 0,
        "Terrible": 0
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
