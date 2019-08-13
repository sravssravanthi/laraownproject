import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardcComponent } from './dashboardc/dashboardc.component';
import { RouterModule,Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const kroute:Routes=[
  {path:'',component:DashboardcComponent},
  {path:'dashboard', component:DashboardcComponent}
]

@NgModule({
  imports: [
    CommonModule,RouterModule.forChild(kroute)
  ],
  declarations: [DashboardcComponent,HomeComponent]
})
export class DashboardModule { }
