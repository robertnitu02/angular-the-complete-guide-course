import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  value = 0;

  counter: Subject<number> = new Subject<number>();

  constructor() { }

  increase() {
    this.value += 1;
    this.counter.next(this.value);
  }

  decrease() {
    this.value -= 1;
    this.counter.next(this.value);
  }
}
