// auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    // Check if the user is logged in (you may use your authentication logic here)
    const isLoggedIn = /* Your authentication logic here */ true;

    if (!isLoggedIn) {
      // If not logged in, redirect to the login page or any other appropriate page
      return this.router.createUrlTree(['/login-page']);
    }

    // If logged in, allow access to the route
    return true;
  }
}
