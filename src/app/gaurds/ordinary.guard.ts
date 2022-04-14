import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { OrdinaryComponent } from '../components/ordinary/ordinary.component';

@Injectable({
  providedIn: 'root'
})
export class OrdinaryGuard implements CanDeactivate<unknown> {
  canDeactivate(
    component: OrdinaryComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot):boolean {

      let temp =sessionStorage.getItem("tempdata");
      if(temp){
           alert("Save content to move to different route")
           return false;
      }
      else
           return true;
  }
  
}
