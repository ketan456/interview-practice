import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { passwordStrengthValidator } from '../../../../../shared/custom-validation/password-validation';
import { fromEvent, interval } from 'rxjs';
import { ReactiveFormService } from '../../../../service/reactive-form/reactive-form.service';
// import { passwordValidator } from '../../../../shared/custom-validation/password-validation';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css',
})
export class ReactiveFormComponent {
  form: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private reactiveFormService: ReactiveFormService
  ) {}

  ngOnInit() {
    this.createPlatform();
  }

  createPlatform() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: [''],
      mobile: [''],
      gender: [''],
      password: ['', passwordStrengthValidator()],
    });
  }

  get control() {
    return this.form.controls;
  }

  print() {
    console.log(this.form.value);
  }

  submit() {
    this.reactiveFormService.saveUser(this.form).subscribe({
      next: (res) => {
        console.log('this is res ', res);
      },
      error: (error) => {
        console.log('this is error ', error);
      },
    });
  }
}
