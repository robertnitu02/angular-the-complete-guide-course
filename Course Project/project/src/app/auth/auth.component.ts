import {Component} from '@angular/core';
import {NgForm} from "@angular/forms";

import {AuthResponseData, AuthService} from "../../shared/services/auth.service";
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent {
  isLoginMode = true;
  isLoading = false;
  error: string = null;

  constructor(private authService: AuthService, private router: Router) {
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) return;
    // console.log(form.value);

    this.isLoading = true;
    this.error = null;

    let userData: {
      email: string,
      id: string,
      _token: string,
      _tokenExpirationDate: string
    } = JSON.parse(localStorage.getItem('userData'));

    if (userData) {
      this.isLoading = false;
      this.error = 'You already logged!';
      return;
    }

    const email = form.value.email;
    const password = form.value.password;

    let authObservable: Observable<AuthResponseData>;

    if (!this.isLoginMode) {
      authObservable = this.authService.signUp(email, password);
    } else {
      authObservable = this.authService.logIn(email, password);
    }

    authObservable
      .subscribe((resData) => {
        console.log(resData);
        this.isLoading = false;
        this.error = null;
        this.router.navigate(['/recipes']);
      }, (errorMessage) => {
        console.log(errorMessage);
        this.error = errorMessage;
        this.isLoading = false;
      });

    form.reset();
  }

  onForgotPassword() {
    this.router.navigate(['/forgot-password']);
  }

  onHandleAlert() {
    this.error = null;
  }
}
