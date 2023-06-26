import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

export interface Data {
  email: string;
  password: string;
  subscription: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('form') registerForm: NgForm;

  defaultSubscription = 'advanced';
  submitted = false;
  registerData: Data = {email: '', password: '', subscription: ''};

  subscriptions = ['Basic', 'Advanced', 'Pro'];

  onSubmit() {
    console.log(this.registerForm);

    this.registerData.email = this.registerForm.value.email;
    this.registerData.password = this.registerForm.value.password;
    this.registerData.subscription = this.registerForm.value.subscription;

    this.submitted = true;
  }
}
