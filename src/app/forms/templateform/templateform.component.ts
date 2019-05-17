import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'obb-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent implements OnInit {

  submitDetail = function(hf){
    console.log(hf)
    console.log("Form Value: " + JSON.stringify(hf.value))
    console.log("Form Valid Status: " + hf.valid)
    console.log("Form InValid Status: " + hf.invalid)
    
  }

  constructor() { }

  ngOnInit() {
  }

}
