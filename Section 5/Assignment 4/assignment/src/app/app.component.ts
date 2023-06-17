import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numbersEmitted: number[] = [];

  onEmittedNumber(number: number) {
    this.numbersEmitted.push(number);
  }
}
