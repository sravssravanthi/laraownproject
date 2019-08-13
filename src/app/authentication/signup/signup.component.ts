import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../crud.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public mysignup= {
    username:null,
    password:null,
    email:null,
    mobile:null,
    confirmpassword:null,
    firstname:null,
    lastname:null
    }
public registration;
  constructor(public crudcode:CrudService) { }

  submit(){
    this.crudcode.signup(this.mysignup)
  .subscribe((success)=>{console.log('postdatasuccess',success)},
(fail)=>{console.log(fail)})
  }
getregisterdata(){
  this.crudcode.get()
  .subscribe(
    (success)=>{
      console.log(success)
      this.registration=success;
      console.log('registerdata',this.registration);
  },
  (fail)=>{console.log(fail)})
}
  ngOnInit() {
this.getregisterdata()
  }

}
