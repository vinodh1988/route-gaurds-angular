import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-moderate',
  templateUrl: './moderate.component.html',
  styleUrls: ['./moderate.component.css']
})
export class ModerateComponent implements OnInit {
currentChild="child1"

  constructor(public router:Router,public ds:DataService) {
     this.loadRoute();
   }


  ngOnInit(): void {
  }

  loadRoute():void {
       this.router.navigate(['moderate/'+this.currentChild])
  }

  toggle(){
    this.currentChild = this.currentChild =="child1"?"child2": "child1";
    this.loadRoute();
  }

}
