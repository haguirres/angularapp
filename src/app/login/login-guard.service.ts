import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LoginService } from '../core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginGuardService implements CanActivate {

    constructor(private loginService: LoginService, private router: Router) {}

  canActivate(): boolean {
    const token = this.loginService.getToken();
    if (!this.loginService.isAuthenticated()) {
        this.router.navigate(['login']);
        return false;
    }
    return true;
  }
}
