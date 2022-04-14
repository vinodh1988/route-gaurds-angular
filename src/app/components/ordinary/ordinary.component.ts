import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordinary',
  templateUrl: './ordinary.component.html',
  styleUrls: ['./ordinary.component.css']
})
export class OrdinaryComponent implements OnInit {

  constructor() {
      sessionStorage.setItem("tempdata","efjdiojsfoujdsof");
   }

  ngOnInit(): void {
  }

  clearCache(): void {
     sessionStorage.removeItem("tempdata")
  }

}
