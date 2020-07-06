import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  clicked = false;
  buttonClicks = [];


  onclick(){
    this.clicked = !this.clicked;
    this.buttonClicks.push(new Date());
  }
}
