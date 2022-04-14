import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpecialComponent } from './components/special/special.component';
import { OrdinaryComponent } from './components/ordinary/ordinary.component';
import { ModerateComponent } from './components/moderate/moderate.component';
import { HomeComponent } from './components/home/home.component';
import { Child1Component } from './components/moderate/child1/child1.component';
import { Child2Component } from './components/moderate/child2/child2.component';

@NgModule({
  declarations: [
    AppComponent,
    SpecialComponent,
    OrdinaryComponent,
    ModerateComponent,
    HomeComponent,
    Child1Component,
    Child2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
