import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  logged:boolean = false
  constructor(private Login: LoginService) {}

  canActivate() {
    this.logged = this.Login.getAuthenticated()
      return this.Login.getAuthenticated()
  }

  isLogged() :boolean {
    return this.logged
  }
  
}
