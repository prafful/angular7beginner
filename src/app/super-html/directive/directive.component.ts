import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'obb-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {

  friends= ["obb","ola","uber","ezy","moto","zoom"]

  locations = [
    {
      id:1,
      city:"chennai",
      code:"044"
    },
    {
      id:2,
      city:"bengaluru",
      code:"080"
    },
    {
      id:3,
      city:"mumbai",
      code:"022"
    },
    {
      id:4,
      city:"kolkata",
      code:"033"
    }
  ]

  check:boolean = true

  checkelse:boolean = true

  city = "022"

 

  toggleCheck = function(){
   
    this.check = !this.check ? true:false
    console.log(this.check)
  }

  toggleElseCheck = function(){
   
    this.checkelse = !this.checkelse ? true:false
    console.log(this.checkelse)
  }

  displayText = function(captured){
    console.log("Called from function!!!! for " + captured)
    this.friends.splice(captured, 1)
    console.log(this.friends)
  }

  constructor() { 
  
  }

  ngOnInit() {
  }

}
