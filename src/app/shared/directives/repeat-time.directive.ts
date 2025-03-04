import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appRepeatTime]',
})
export class RepeatTimeDirective {
  // @HostListener('input', ['$event'])
  // onKeyDown(event: KeyboardEvent) {
  //   console.log("event.key");
  // }
  // test(event:any){
  //   console.log(event)
  // }

  constructor() {}
  @Input() isValid:boolean = true
  @HostListener('input', ['$event'])
  onInput(event: any) {
    const inputValue = event.target.value;
    console.log('Input Value:', inputValue);
    console.log(this.isValid);
  }
}
