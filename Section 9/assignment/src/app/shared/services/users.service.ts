import { Injectable } from "@angular/core";

import { CounterService } from "./counter.service";

@Injectable()
export class UsersService {
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];

  constructor(private counterService: CounterService) {
  }

  addUser(name: string, status: string) {
    if (status.toLowerCase() === 'active') {
      this.activeUsers.push(name);
    } else if (status.toLowerCase() === 'inactive') {
      this.inactiveUsers.push(name);
    }
  }

  setToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.counterService.incrementActiveToInactive();
  }

  setToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.counterService.incrementInactiveToActive();
  }
}
