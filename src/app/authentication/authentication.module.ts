import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const mroutes: Routes = [
  {path:'',component:LoginComponent},
  {path:'authentication/login',component:LoginComponent},
  {path:'authentication/signup',component:SignupComponent}
]

@NgModule({
  imports: [
HttpClientModule,
CommonModule,FormsModule,RouterModule.forChild(mroutes)
  ],
  declarations: [LoginComponent, SignupComponent],
  exports:[LoginComponent]
})
export class AuthenticationModule { }
