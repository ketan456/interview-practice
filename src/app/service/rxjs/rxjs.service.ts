import { Injectable } from '@angular/core';
import { map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RxjsService {
  constructor() {}

  ofExample() {
    const num = of(1, 2, 3, 4, 5);
    const squares = num.pipe(map((num) => num * num));
    return squares;
  }
}
