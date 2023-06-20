import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { ActiveUsersComponent } from './active-users/active-users.component';
import { InactiveUsersComponent } from './inactive-users/inactive-users.component';
import { UsersService } from "./shared/services/users.service";
import { CounterService } from "./shared/services/counter.service";
import { NewUserComponent } from './new-user/new-user.component';

@NgModule({
  declarations: [
    AppComponent,
    ActiveUsersComponent,
    InactiveUsersComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [UsersService, CounterService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
