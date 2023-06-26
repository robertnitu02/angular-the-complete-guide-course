import {Component, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

export interface User {
  username: string;
  email: string;
  secret: string;
  questionAnswer: string;
  gender: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('form') angularForm: NgForm;

  defaultQuestion = 'pet';
  questionAnswer = '';
  genders = ['male', 'female'];
  submitted = false;

  user: User = {
    username: '',
    email: '',
    secret: '',
    questionAnswer: '',
    gender: '',
  };

  suggestUserName() {
    const suggestedName = 'Superuser';
    // this.angularForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'female'
    // });
    this.angularForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }

  // onSubmit(form: NgForm) {
  //   console.log(form.value);
  // }

  onSubmit() {
    // console.log(this.angularForm);
    this.user.username = this.angularForm.value.userData.username;
    this.user.email = this.angularForm.value.userData.email;
    this.user.secret = `Your first ${this.angularForm.value.secret}`;
    this.user.questionAnswer = this.angularForm.value.questionAnswer;
    this.user.gender = this.angularForm.value.gender;
    this.submitted = true;

    this.angularForm.reset();
  }
}
