import { Component, OnInit } from '@angular/core';
import { AuthserService } from '../authser.service';
import {Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public mylogin= {
  username:null,
  password:null
  }

  
  login(){
    console.log("loginworks",this.mylogin);
    const response = this.auth.loginservice(this.mylogin);
    if(response==true){
      console.log('success');
      this.routing.navigate(['/dashboard']);
    }else {
      console.log('fail');
    }
  }
  constructor(private auth:AuthserService, private routing:Router) { }
  ngOnInit() {
  }

}
