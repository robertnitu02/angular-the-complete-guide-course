import { Component } from '@angular/core';
import { UsersService } from "../shared/services/users.service";

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent {
  constructor(private usersService: UsersService) {
  }

  addUser(name: string, status: string) {
    if (name === '') return alert('Please enter a name');
    this.usersService.addUser(name, status);
  }
}
