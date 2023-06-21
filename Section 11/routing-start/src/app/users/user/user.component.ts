import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  subscribedParam: Subscription;

  user: { id: number, name: string };

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name']
    };
    // console.log(JSON.stringify(this.user));
    this.subscribedParam = this.route.params
      .subscribe((params: Params) => {
        this.user.id = params['id'];
        this.user.name = params['name'];
        // console.log('Changed');
      });
  }

  ngOnDestroy(): void {
    this.subscribedParam.unsubscribe();
  }

}
