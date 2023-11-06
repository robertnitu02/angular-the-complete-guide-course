import { Component, OnDestroy, OnInit } from '@angular/core';
import { CounterService } from "./counter.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  value = 0;

  constructor(private counterService: CounterService) {
  }

  ngOnInit(): void {
    this.counterService.counter.subscribe(value => {
      // console.log(`New value: ${value}`);
      this.value = value;
    });
  }

  ngOnDestroy(): void {
    this.counterService.counter.unsubscribe();
  }

  increase() {
    this.counterService.increase();
  }

  decrease() {
    this.counterService.decrease();
  }
}
