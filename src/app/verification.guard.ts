import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
// tslint:disable-next-line:typedef no-shadowed-variable

export class VerificationGuard implements CanActivate {

  constructor(router: Router) {}
  // @ts-ignore
  private router: any;
  // @ts-ignore
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    const  token = localStorage.getItem('token');
    if (token) {
      return true;
    }else {
      this.router.navigate(['/login']);
    }
  }
}
