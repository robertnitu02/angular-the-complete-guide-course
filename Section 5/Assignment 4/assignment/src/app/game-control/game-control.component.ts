import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {
  @Output('emitNumber') outputNumber = new EventEmitter<number>();

  isGmeStarted = false;
  gameInterval: number;
  contor = 0;

  startGame() {
    if (this.isGmeStarted) return alert('Game is already started');

    this.isGmeStarted = true;
    this.gameInterval = setInterval(() => {
      this.outputNumber.emit(this.contor);
      this.contor += 1;
    }, 1000);
  }

  stopGame() {
    if (!this.isGmeStarted) return alert('Game is not started yet');

    this.isGmeStarted = false;
    this.contor = 0;
    clearInterval(this.gameInterval);
  }
}
