import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(public http:HttpClient) { }
  
  signup(data){
    let response=this.http.post("https://api.mlab.com/api/1/databases/angularjs/collections/employee?apiKey=NwUz6Go9-PSOYsRJS9tLR-p5idELeFx1",data);
    return response;
  }
  get(){
    let response= this.http.get("https://api.mlab.com/api/1/databases/angularjs/collections/employee?apiKey=NwUz6Go9-PSOYsRJS9tLR-p5idELeFx1");
    return response;
  }
}
