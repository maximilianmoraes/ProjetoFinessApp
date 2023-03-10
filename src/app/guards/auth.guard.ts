import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { promise } from 'protractor';
import { resolve } from 'dns';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ){}

  canActivate(): Promise<boolean>{
    return new Promise(resolve =>{
      this.authService.getAuth().onAuthStateChanged(user => {
        if(!user) {
          this.router.navigate(['login']);
        }
        resolve(user ? true : false);
      });
    });
  }
}
