import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'obb-inbuilt',
  templateUrl: './inbuilt.component.html',
  styleUrls: ['./inbuilt.component.css']
})
export class InbuiltComponent implements OnInit {

  money = 88

  name = 'chance-e-illiya'

  birthday = new Date()

  constructor() { }

  ngOnInit() {
  }

}
