import { Component } from '@angular/core';

@Component({
  selector: 'cts-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Angular 8';
  type = "Easy"
  score = 10

  displayMessage = function(){
    //alert("Current score: " + this.score)
    //this.score = this.score+10
  }


}
