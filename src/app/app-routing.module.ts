import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilterComponent } from './filter/filter.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { RatingComponent } from './rating/rating.component';
import { SaleComponent } from './sale/sale.component';

const routes: Routes = [
  {
    path:'',
    component:FilterComponent,
  },{
    path:'vehicles',
    component:VehiclesComponent,
  },{
    path:'vehicle',
    component:VehicleComponent,
  },{
    path:'vehicle-rating',
    component:RatingComponent,
  },{
    path:'vehicle-sale',
    component:SaleComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
