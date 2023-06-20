import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  randomNumber: number = 0;

  constructor() {
  }

  ngOnInit(): void {
    this.randomNumber = Math.floor(Math.random() * 5) + 1;
  }
}
