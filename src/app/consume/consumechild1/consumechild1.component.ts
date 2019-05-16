import { Component, OnInit } from '@angular/core';
import { LocalService } from "../../services/local.service";


@Component({
  selector: 'obb-consumechild1',
  templateUrl: './consumechild1.component.html',
  styleUrls: ['./consumechild1.component.css']
})
export class Consumechild1Component implements OnInit {

  allBanks:any

  constructor(private local:LocalService) {
    
   }

  ngOnInit() {
       this.accessLocalService()
  }

  accessLocalService = function(){
   this.allBanks = this.local.addBank()
  }



}
