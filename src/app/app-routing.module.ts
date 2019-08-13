import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AuthenticationModule } from './authentication/authentication.module';


const routes: Routes = [{
  path:'',loadChildren:"./authentication/authentication.module#AuthenticationModule"},
{ path:'authentication',loadChildren:"./authentication/authentication.module#AuthenticationModule"},
{ path:'dashboard',loadChildren:"./dashboard/dashboard.module#DashboardModule"
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
