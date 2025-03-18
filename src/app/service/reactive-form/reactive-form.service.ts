import { Injectable } from '@angular/core';
import { environment } from '../../../environment/environment';
import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class ReactiveFormService {
  baseUrl: string = environment.url;

  constructor(private http: HttpClient) {}

  saveUser(form: FormGroup) {
    console.log(typeof form.value);
    return this.http.post(`${this.baseUrl}/user`, form.value);
  }
}
