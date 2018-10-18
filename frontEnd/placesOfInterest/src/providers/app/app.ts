import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the AppProvider provider.
  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AppProvider {
  registerURL = "http://localhost:3000/api/appUsers?access_token=2018-09-25T01:18:44.619Z";
  loginURL = "http://localhost:3000/api/appUsers/login?access_token=2018-09-25T01:18:44.619Z";
  logoutURL = "http://localhost:3000/api/yes/logout?access_token=2018-09-25T01:18:44.619Z";

  constructor(public http: HttpClient) {
    console.log('Hello AppProvider Provider');
  }

  register(newUserData){
    console.log("service", newUserData);
    return this.http.post(this.registerURL, newUserData);
  }

  login(userData){
    return this.http.post(this.loginURL , userData);
    
    
}
logout(token){
  return this.http.post(this.logoutURL  +  '?access_token=' + token, {});
  
}
}