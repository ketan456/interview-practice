import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { decrement, increment, reset } from '../../../state/container.action';
import { Observable } from 'rxjs';
import { selectCount } from '../../../state/container.selecter';

@Component({
  selector: 'app-ng-rx',
  templateUrl: './ng-rx.component.html',
  styleUrl: './ng-rx.component.css',
})
export class NgRxComponent {
  // count$: Observable<number>;

  // constructor(private store: Store<{ count: number }>) {
  //   this.count$ = store.select(selectCount);
  // }

  // increment() {
  //   this.store.dispatch(increment());
  // }

  // decrement() {
  //   this.store.dispatch(decrement());
  // }

  // reset() {
  //   this.store.dispatch(reset());
  // }
}
