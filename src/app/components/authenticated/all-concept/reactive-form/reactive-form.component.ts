import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { passwordStrengthValidator } from '../../../../shared/custom-validation/password-validation';
import { fromEvent, interval } from 'rxjs';
// import { passwordValidator } from '../../../../shared/custom-validation/password-validation';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css',
})
export class ReactiveFormComponent {
  form: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.createPlatform();

    // const el = document.getElementById('my-element')!;

    // const mouseMoves = fromEvent<MouseEvent>(el, 'mousemove');

    // const subscription = mouseMoves.subscribe((evt) => {
    //   console.log(`Coords: ${evt.clientX} X ${evt.clientY}`);

    //   if (evt.clientX < 40 && evt.clientY < 40) {
    //     subscription.unsubscribe();
    //   }
    // });

    // Create an Observable that will publish a value on an interval
    // const secondsCounter = interval(1000);
    // // Subscribe to begin publishing values
    // const subscription = secondsCounter.subscribe((n) =>
    //   console.log(`It's been ${n + 1} seconds since subscribing!`)
    // );
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
}
