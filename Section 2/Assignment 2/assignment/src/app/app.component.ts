import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = '';

  resetUsername() {
    if (this.username === '') return; // extra check
    this.username = '';
    alert('Username has been reset!');
  }
}
