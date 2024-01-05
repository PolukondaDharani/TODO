import { Component } from '@angular/core';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {
 constructor(public hardcodedAuthenticateService: HardcodedAuthenticationService){

 }
 ngOnInit(){
  this.hardcodedAuthenticateService.logouttheuser();
 }
}
