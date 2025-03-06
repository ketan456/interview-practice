import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private preLoading = new BehaviorSubject<boolean>(false);
  loading$ = this.preLoading.asObservable();

  constructor() {}

  show() {
    this.preLoading.next(true);
    console.log('show');
  }

  hide() {
    console.log('hide');

    this.preLoading.next(false);
  }
}
