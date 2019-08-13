import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthserService {

  constructor() { }
  loginservice(cmk:any){
    // console.log("service");
    // console.log(cmk);
    if(cmk.username =='murali@gmail.com' && cmk.password=='welcome'){
      return true;
    } else {
      return false;
    }
  }

  
}
