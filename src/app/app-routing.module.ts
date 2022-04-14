import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { Child1Component } from './components/moderate/child1/child1.component';
import { Child2Component } from './components/moderate/child2/child2.component';
import { ModerateComponent } from './components/moderate/moderate.component';
import { OrdinaryComponent } from './components/ordinary/ordinary.component';
import { SpecialComponent } from './components/special/special.component';
import { ModerateGuard } from './gaurds/moderate.guard';
import { OrdinaryGuard } from './gaurds/ordinary.guard';
import { SpecialGaurdGuard } from './gaurds/special-gaurd.guard';

const routes: Routes = [
  
    {path:"",component:HomeComponent},
    {path:"special",component: SpecialComponent,canActivate:[SpecialGaurdGuard]},

    {
      path:"ordinary",component:OrdinaryComponent,
      canDeactivate:[OrdinaryGuard]},
    {
    path:"moderate",
    component: ModerateComponent,
    canActivateChild: [ModerateGuard],
    children:[
    {
       path:"child1",component:Child1Component
     },
     {
      path:"child2",component:Child2Component
    },
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
