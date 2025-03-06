import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SubjectService {
  subject$ = new Subject<any>();

  constructor(private http: HttpClient) {}

  countIncrease(count: any) {
    this.subject$.next(count);
  }

  subjectBehavior$ = new BehaviorSubject<any>('');

  behavior$ = this.subjectBehavior$.asObservable();

  onChangeBehavior(value: string) {
    this.subjectBehavior$.next(value);
  }

  // ReplaySubject stores the last 2 messages
  private messageRePlaySubject$ = new ReplaySubject<string>(2);

  // Expose as an observable
  messageReplay$ = this.messageRePlaySubject$.asObservable();

  // Function to update messages
  updateMessage(newMessage: string) {
    this.messageRePlaySubject$.next(newMessage);
  }

  private userAsyncSubject$ = new AsyncSubject<any>();
  userAsync$ = this.userAsyncSubject$.asObservable();

  fetchUserData() {
    // Check if data has already been fetched
    if (!this.userAsyncSubject$.closed) {
      console.log('Fetching data from API...');
      this.http.get('https://jsonplaceholder.typicode.com/users/1').subscribe({
        next: (data) => {
          this.userAsyncSubject$.next(data); // Emit the data
          this.userAsyncSubject$.complete(); // Complete the subject
        },
        error: (error) => {
          console.error('Error fetching data', error);
        },
      });
    }
  }
}
