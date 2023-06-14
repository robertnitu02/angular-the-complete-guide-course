import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displaySecretString = 'You have found the secret!';
  displaySecretIteration = 0;
  clickLogs: string[] = [];

  addClick() {
    this.clickLogs.push(new Date().toLocaleDateString('ro', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    }));
    this.displaySecretIteration++;
  }
}
