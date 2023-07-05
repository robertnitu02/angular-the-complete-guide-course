import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs";

import {DataStorageService} from "../../shared/services/data-storage.service";
import {AuthService} from "../../shared/services/auth.service";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  userSubscription: Subscription;

  isAuthenticated = false;

  constructor(private dataStorageService: DataStorageService, private authService: AuthService) {
  }

  ngOnInit(): void {
    // this.onFetchData();
    this.userSubscription = this.authService.user
      .subscribe((user) => {
        this.isAuthenticated = !!user; // !user ? false : true
        console.log(user);
        console.log(this.isAuthenticated);
      });
  }

  onSaveData() {
    this.dataStorageService.storeRecipes();
  }

  onFetchData() {
    this.dataStorageService.fetchRecipes().subscribe();
    this.authService.user.subscribe();
  }

  onLogOut() {
    this.authService.logOut();
  }
}
