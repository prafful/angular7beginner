import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from "@angular/animations";

@Component({
  selector: 'obb-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
  animations:[
    trigger("animateParagraph",[state("one",style(
                                      {
                                        color:'red',
                                        transform:'scale(1)',
                                        letterSpacing:'10px'
                                      })), 
                                state("two", style(
                                      {
                                        color:'green',
                                        transform:'scale(3)',
                                        letterSpacing:'-5px'
                                      })), 
                                transition('one <-> two', animate('300ms ease-in'))])
  ]
})
export class AnimationComponent implements OnInit {
  
  myState = "two"

  animateText = function(){
    this.myState = this.myState === "two" ? "one":"two"
  }

  constructor() { }

  ngOnInit() {
  }

}
