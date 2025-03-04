import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SubjectService {
  subject$ = new Subject<any>();

  constructor() {}

  countIncrease(count: any) {
    this.subject$.next(count);
  }

  subjectBehavior$ = new BehaviorSubject<any>('');

  behavior$ = this.subjectBehavior$.asObservable();


  onChangeBehavior(value:string){
    this.subjectBehavior$.next(value);
  }
}
