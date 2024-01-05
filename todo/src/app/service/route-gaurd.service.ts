import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGaurdService implements CanActivate {

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(this.hardcodedAuthenticateService.isloggedIn()){
      return true
    }
    this.router.navigate(['login'])
    return false
  }

  constructor(public hardcodedAuthenticateService: HardcodedAuthenticationService,private router : Router) { }
}
        