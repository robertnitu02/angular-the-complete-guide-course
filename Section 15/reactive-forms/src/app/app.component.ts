import {Component, OnInit} from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  signUpForm: FormGroup;

  genders = ['male', 'female'];
  forbiddenUsernames = ['Anna', 'Raul'];

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [
          Validators.required,
          this.isForbiddenUsername.bind(this)
        ]),
        'email': new FormControl(null, [
          Validators.required,
          Validators.email
        ], this.isForbiddenEmailAsync.bind(this))
      }),
      'gender': new FormControl('female'),
      'hobbies': new FormArray([])
      // 'username': new FormControl(null, [Validators.required]),
      // 'email': new FormControl(null, [Validators.required, Validators.email]),
    });

    this.signUpForm.statusChanges.subscribe(
      (status) => {
        console.log(status);
      });

    this.signUpForm.valueChanges.subscribe(
      (value) => {
        console.log(value);
      });

    this.signUpForm.setValue({
      'userData': {
        'username': 'Robert',
        'email': 'robert@test.com'
      },
      'gender': 'male',
      'hobbies': []
    });

    this.signUpForm.patchValue({
      'userData': {
        'username': 'No'
      }
    });
  }

  onSubmit() {
    console.clear();
    console.log(this.signUpForm);
    // this.signUpForm.reset();
    this.signUpForm.reset({
      'gender': 'male'
    });
  }

  getControls() {
    return (<FormArray>this.signUpForm.get('hobbies')).controls;
  }

  onAddHobby() {
    const formControl = new FormControl(null, Validators.required);
    (<FormArray>this.signUpForm.get('hobbies')).push(formControl);
  }

  isForbiddenUsername(formControl: FormControl): { [s: string]: boolean } {
    if (this.forbiddenUsernames.indexOf(formControl.value) !== -1)
      return {'isForbiddenUsername': true};
    return null;
  }

  isForbiddenEmailAsync(formControl: FormControl): Promise<any> | Observable<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (formControl.value === 'test@test.com')
          resolve({'isForbiddenEmail': true});
        else
          resolve(null);
      }, 1500);
    });
  }
}
