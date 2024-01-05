import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {
  authenticate(username:String,password:number){
    if(username=="dharani" && password==153){
      sessionStorage.setItem('authenticateduser','username')
      return true
     }
    return false;
  }
  isloggedIn(){
    let user=sessionStorage.getItem('authenticateduser')
    return !(user===null)
  }

  logouttheuser(){
    sessionStorage.removeItem('authenticateduser')
  }
  constructor() { }
}
