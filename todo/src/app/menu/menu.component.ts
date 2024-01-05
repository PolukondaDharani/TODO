import { Component } from '@angular/core';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  isUserloggedin:boolean=false
 constructor(public hardcodedAuthenticateService: HardcodedAuthenticationService){}
//  ngOnInit(){
//   this.isUserloggedin=this.hardcodedAuthenticateService.isloggedIn();
//  }
 }

