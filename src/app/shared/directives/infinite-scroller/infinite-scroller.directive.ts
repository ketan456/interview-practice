import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appInfiniteScroller]'
})
export class InfiniteScrollerDirective {




  constructor() { }


  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    //In chrome and some browser scroll is given to body tag
    let pos =
      (document.documentElement.scrollTop || document.body.scrollTop) +
      document.documentElement.offsetHeight;
    let max = document.documentElement.scrollHeight;
    // pos/max will give you the distance between scroll bottom and and bottom of screen in percentage.
    if (pos == max) {
      console.log('i down');
    }
  }

}
