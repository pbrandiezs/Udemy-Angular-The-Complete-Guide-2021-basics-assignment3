import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  clicked = false;

  onclick(){
    if (!this.clicked) {
      this.clicked = true;
    } else {
      this.clicked = false;
    }
  }
}
