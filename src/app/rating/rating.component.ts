import { Component, OnInit } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {

  public barChartLegend = false;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [ 'Excellent', 'Good', 'Fair', 'Poor', 'Terrible'],
    datasets: []
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: false,
  };

  ngOnInit(): void {
    let vehicle = JSON.parse(sessionStorage.getItem('vehicle')|| '{}');
    let values:number[] = Object.values(vehicle.ratings);
    this.barChartData.datasets.push({
      data:values
    })

  }

}
