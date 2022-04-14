import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'route-gaurds';
  content ="Click here to allow special component"
  content2 ="Click here to allow child Route"

  allowSpecial(){
    sessionStorage.setItem("token","dummyToken");
    this.content ="special route is now available";
  }
  allowChild(){
    sessionStorage.setItem("childToken","dummyToken");
    this.content ="child route is now available";
  }
}
