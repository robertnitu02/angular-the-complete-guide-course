import {
  Component,
  ComponentFactoryResolver, OnDestroy,
  ViewChild,
} from '@angular/core';
import {NgForm} from "@angular/forms";

import {Observable, Subscription} from "rxjs";
import {Router} from "@angular/router";

import {AuthResponseData, AuthService} from "../../shared/services/auth.service";
import {AlertComponent} from "../../shared/alert/alert.component";
import {PlaceholderDirective} from "../../shared/directives/placeholder.directive";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html'
})
export class AuthComponent implements OnDestroy {
  @ViewChild(PlaceholderDirective) alertHost: PlaceholderDirective;

  private alertSubscription: Subscription;

  isLoginMode = true;
  isLoading = false;

  // error: string = null;

  constructor(
    private authService: AuthService,
    private router: Router,
    private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnDestroy() {
    if (this.alertSubscription)
      this.alertSubscription.unsubscribe();
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    if (!form.valid) return;
    // console.log(form.value);

    this.isLoading = true;
    // this.error = null;

    let userData: {
      email: string,
      id: string,
      _token: string,
      _tokenExpirationDate: string
    } = JSON.parse(localStorage.getItem('userData'));

    if (userData) {
      this.isLoading = false;
      // this.error = 'You already logged!';
      this.showErrorAlert('You already logged!');
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
        // this.error = null;
        this.router.navigate(['/recipes']);
      }, (errorMessage) => {
        console.log(errorMessage);
        // this.error = errorMessage;
        this.showErrorAlert(errorMessage);
        this.isLoading = false;
      });

    form.reset();
  }

  onForgotPassword() {
    this.router.navigate(['/forgot-password']);
  }

  // onHandleAlert() {
  //   this.error = null;
  // }

  showErrorAlert(message: string) {
    const alertComponentFactory =
      this.componentFactoryResolver.resolveComponentFactory(AlertComponent);
    const hostViewContainerRef = this.alertHost.viewContainerRef;
    hostViewContainerRef.clear();

    const componentRef = hostViewContainerRef.createComponent(alertComponentFactory);
    componentRef.instance.message = message;
    this.alertSubscription = componentRef.instance.close.subscribe(() => {
      this.alertSubscription.unsubscribe();
      hostViewContainerRef.clear();
    });
  }
}
