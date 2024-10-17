import { Injectable } from '@angular/core';
import {  ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from '../services/storage/storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard   {

  constructor(private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    const userRole = StorageService.getUserRole();
  

    if (route.data['role'] && route.data['role'].indexOf(userRole) === -1 ) {
      // Redirection si le rôle de l'utilisateur n'est pas autorisé pour cette route
      this.router.navigate(['/access-denied']);
      return false;
    }
    return true;
  }
}
