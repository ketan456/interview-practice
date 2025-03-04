import { Component } from '@angular/core';
import { RxjsService } from '../../../../service/rxjs/rxjs.service';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrl: './rxjs.component.css',
})
export class RxjsComponent {
  codeExample = `
  import { of, map } from 'rxjs';
  
  const nums = of(1, 2, 3);
  
  const squares = nums.pipe(
    map(num => num * num)
  );
  
  squares.subscribe(value => console.log(value));
  
  // Logs:
  // 1
  // 4
  // 9
  `;

  observableCode = `import { Observable } from 'rxjs';
const obs$ = new Observable(subscriber => { 
  subscriber.next(1); // Emits a value
  subscriber.complete(); // Signals completion
});
`;

  observerCode = `obs$.subscribe({ 
   // Logs the emitted value
  next: value => console.log(value),
   // Executes on completion
  complete: () => console.log('Completed!')
});`;

  formCode = `import { from } from 'rxjs';

// From an array
const arrayObservable = from([10, 20, 30]);
arrayObservable.subscribe(value => console.log(value));

10
20
30

`;

  formWithPromiseCode = `const promise = new Promise(resolve => resolve('Hello from Promise!'));
const promiseObservable = from(promise);
promiseObservable.subscribe(value => console.log(value));


Hello from Promise!

`;

  intervalCode = `import { interval } from 'rxjs';

// Create an Observable that will publish a value on an interval
const secondsCounter = interval(1000);
// Subscribe to begin publishing values
const subscription = secondsCounter.subscribe(n =>
  console.log('It's been n + 1 seconds since subscribing!'));`;

  timeCode = `
  import { timer } from 'rxjs';

// Emit value after 2 seconds
const observable = timer(2000);
observable.subscribe(() => console.log('Timer triggered!'));

//after 2 second
Timer triggered!
  `;
  timeRepeatedCode = `const repeatedObservable = timer(2000, 1000); // Starts after 2s, then every 1s
repeatedObservable.subscribe(value => console.log(value));
`;

  filterCode = `import { of } from 'rxjs';
import { filter } from 'rxjs/operators';

of(1, 2, 3, 4, 5).pipe(
  filter(value => value % 2 === 0)
).subscribe(value => console.log(value));

//output 
2
4

`;

  mergeMapCode = `import { of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

of('A', 'B').pipe(
  mergeMap(value => of(value}1, value}2))
).subscribe(value => console.log(value));

//output
A1
A2
B1
B2

`;

switchMap=`import { fromEvent } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { interval } from 'rxjs';

const clicks = fromEvent(document, 'click');
const stream = clicks.pipe(switchMap(() => interval(1000)));

stream.subscribe(value => console.log(value));
`

  constructor(private rxjsService: RxjsService) {
    //of and map Example
    this.ofAndMapExample();
  }

  ofAndMapExample() {
    this.rxjsService.ofExample().subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
