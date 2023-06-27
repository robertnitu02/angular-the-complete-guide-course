import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  invalidProjectName = 'Test';

  projectForm: FormGroup;

  ngOnInit(): void {
    console.clear();
    this.projectForm = new FormGroup({
      'projectName': new FormControl(null, [
        Validators.required,
        // this.checkProjectName.bind(this)
      ], this.checkProjectNameAsync.bind(this)),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'status': new FormControl('stable')
    });
  }

  checkProjectName(formControl: FormControl): { [s: string]: boolean } {
    if (formControl.value === this.invalidProjectName)
      return {'isProjectNameValid': true};
    return null;
  }

  checkProjectNameAsync(formControl: FormControl): Promise<any> | Observable<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (formControl.value === this.invalidProjectName)
          resolve({'isProjectNameValid': true});
        else
          resolve(null);
      }, 1500);
    });
  }

  onSubmit() {
    console.clear();
    console.log(this.projectForm);
    this.projectForm.reset({
      'status': new FormControl('stable')
    });
  }
}
