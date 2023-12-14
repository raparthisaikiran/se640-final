import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../app.component';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

interface FilterVehicle {
  vehicle: string;
  minPrice: number;
  maxPrice: number;
}
@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})
export class VehiclesComponent implements OnInit {
  vehicles: Vehicle[] = [];
  params: any;
  constructor(private route: ActivatedRoute, private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.route.queryParams
      .subscribe((params) => {
        this.params = params;
        this.vehicles = this.dataService.filterVehicles(params['vehicle'], params['minPrice'], params['maxPrice'])
        console.log(this.vehicles)
      }
      );
  }
  onVechiledSelected(vehicle: Vehicle) {
    sessionStorage.setItem('vehicle', JSON.stringify(vehicle));
    this.router.navigate(['/vehicle'],
      { queryParams: { vehicle: this.params.vehicle, minPrice: this.params.minPrice, maxPrice: this.params.maxPrice }, queryParamsHandling: 'merge' });
  }
}
