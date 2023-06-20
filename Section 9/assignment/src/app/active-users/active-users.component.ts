import { Component, OnInit } from '@angular/core';
import { UsersService } from "../shared/services/users.service";
import { CounterService } from "../shared/services/counter.service";

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  activeUsers: string[] = [];

  constructor(private usersService: UsersService, private counterService: CounterService) {
  }

  ngOnInit() {
    this.activeUsers = this.usersService.activeUsers;
  }

  onSetToInactive(index: number) {
    this.usersService.setToInactive(index);
  }

  getCounter(): number {
    return this.counterService.activeToInactiveCounter;
  }
}
