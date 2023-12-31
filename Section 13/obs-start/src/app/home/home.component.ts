import {Component, OnDestroy, OnInit} from '@angular/core';

import {interval, Subscription, Observable} from 'rxjs';
import {map, filter} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  firstObsSubscription: Subscription;

  constructor() {
  }

  ngOnInit() {
    // this.firstObsSubscription = interval(1000)
    //   .subscribe((count: number) => {
    //     console.log(count);
    //   });

    const customIntervalObservable = Observable.create((observer) => {
      let count = 0;
      setInterval(() => {
        if (count === 5) {
          observer.complete();
        }
        if (count > 3) {
          observer.error(new Error('Count is greater than 3!'));
        }
        observer.next(count);
        count++;
      }, 1000);
    });

    this.firstObsSubscription = customIntervalObservable
      .pipe(
        filter((data) => {
          return data > 0;
        }),
        map((data: number) => {
          return `Round: ${data + 1}`;
        }))
      .subscribe((data) => {
        console.log(data);
      }, error => {
        console.log(error);
        alert(error.message);
      });
  }

  ngOnDestroy(): void {
    this.firstObsSubscription.unsubscribe();
  }

}
