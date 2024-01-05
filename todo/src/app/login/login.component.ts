import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { error } from 'console';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

    username="dharani"
    password:number=153
    error:String ="invalid credentials"
    invalidlogin = false
    
  
  constructor(public hardcodedAuthenticateService: HardcodedAuthenticationService,public router : Router){}
  

  handleLogin(){
    if(this.hardcodedAuthenticateService.authenticate(this.username,this.password)){
      this.invalidlogin = false
      this.router.navigate(['welcome',this.username])
    }
    else{
      this.invalidlogin = true
      
    }
  }


}
