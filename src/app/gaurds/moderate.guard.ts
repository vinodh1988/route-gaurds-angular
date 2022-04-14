import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DataService } from '../services/data.service';

@Injectable({
  providedIn: 'root'
})
export class ModerateGuard implements CanActivateChild {
  constructor(private ds:DataService){}
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
   let token = sessionStorage.getItem("childToken")
   if(token){
    return true
   }
   else{
     this.ds.status = "Child route is not active yet"
     return false
   }
  }
  
}
