import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../app.component';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.css']
})
export class VehicleComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router, private dataService: DataService) { }
  vehicle: any;
  params: any;
  showLocation:boolean = false;
  ngOnInit(): void {
    this.vehicle = JSON.parse(sessionStorage.getItem('vehicle') || '{}');
    this.route.queryParams
      .subscribe((params) => {
        this.params = params;
      }
      );
  }
  onLocationClick() {
    this.showLocation = !this.showLocation;
  }
  onRating(rate: string) {
    this.vehicle.ratings[rate] = this.vehicle.ratings[rate] + 1;
    sessionStorage.setItem('vehicle', JSON.stringify(this.vehicle));
    this.dataService.updateVehicle(this.vehicle);
    this.router.navigate(['/vehicle-rating'],
      { queryParams: { vehicle: this.params.vehicle, minPrice: this.params.minPrice, maxPrice: this.params.maxPrice }, queryParamsHandling: 'merge' });
  }
}
