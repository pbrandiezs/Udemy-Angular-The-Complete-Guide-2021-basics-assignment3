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
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+ time;

    if (!this.clicked) {
      this.clicked = true;
      this.buttonClicks.push(dateTime);
    } else {
      this.clicked = false;
      this.buttonClicks.push(dateTime);
    }
    console.log(this.buttonClicks);
  }
}
