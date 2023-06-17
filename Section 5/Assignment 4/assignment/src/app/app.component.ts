import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbersEmitted: number[] = [];
  evenNumbersEmitted: number[] = [];

  onEmittedNumber(number: number) {
    if (number % 2 === 0) {
      this.evenNumbersEmitted.push(number);
    } else {
      this.oddNumbersEmitted.push(number);
    }
  }
}
