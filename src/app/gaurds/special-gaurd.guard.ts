import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { reduceEachTrailingCommentRange } from 'typescript';
import { DataService } from '../services/data.service';

@Injectable({
  providedIn: 'root'
})
export class SpecialGaurdGuard implements CanActivate {
 
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      let token = sessionStorage.getItem("token")
    
      if(token){
        
      return true;
      }
      else{
        alert("Route cannot be loaded- no token available")
      return false;
      }
  }
  
}
