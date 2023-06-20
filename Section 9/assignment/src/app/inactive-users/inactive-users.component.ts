import { Component, OnInit } from '@angular/core';
import { UsersService } from "../shared/services/users.service";
import { CounterService } from "../shared/services/counter.service";

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  inactiveUsers: string[] = [];

  constructor(private usersService: UsersService, private counterService: CounterService) {
  }

  ngOnInit(): void {
    this.inactiveUsers = this.usersService.inactiveUsers;
  }

  onSetToActive(id: number) {
    this.usersService.setToActive(id);
  }

  getCounter(): number {
    return this.counterService.inactiveToActiveCounter;
  }
}
