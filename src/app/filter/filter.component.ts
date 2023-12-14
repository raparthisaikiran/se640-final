import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  vehicle: string = 'Honda Civic';
  minPrice: number = 16000;
  maxPrice: number = 18000;
  constructor(private router: Router) { }
  onSearch() {
    this.router.navigate(
      ['/vehicles'],
      { queryParams: { vehicle: this.vehicle, minPrice: this.minPrice, maxPrice: this.maxPrice }, queryParamsHandling: 'merge' }
    );
  }
}
