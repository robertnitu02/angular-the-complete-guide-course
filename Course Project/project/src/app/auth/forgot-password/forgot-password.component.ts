import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {AuthService} from "../../../shared/services/auth.service";

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
})
export class ForgotPasswordComponent implements OnInit {
  isLoading = false;
  error: string = null;
  emailMessage = null;

  constructor(private authService: AuthService) {
  }

  onSubmit(forgotPasswordForm: NgForm) {
    // console.log(forgotPasswordForm);
    if (!forgotPasswordForm.valid) return;
    const email = forgotPasswordForm.value.email;
    this.isLoading = true;
    this.authService.recoveryPassword(email)
      .subscribe((resData) => {
        this.emailMessage = email;
        this.error = null;
        this.isLoading = false;
      }, (errorMessage) => {
        this.error = errorMessage;
        this.isLoading = false;
      });

    forgotPasswordForm.reset();
  }

  ngOnInit(): void {
  }
}
