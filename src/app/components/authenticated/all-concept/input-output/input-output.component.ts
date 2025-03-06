import { Component } from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrl: './input-output.component.css',
})
export class InputOutputComponent {
  getColor: string = '';
 items=[1,2,3,4,5,6,7];
  onClick(event: any) {
    console.log(event);
  }

  getColorFromInput(event: any) {
    if (event != null && event != '') {
      this.getColor = event;
      console.log(this.getColor);
    } else {
      this.getColor = 'none';
    }
  }
}
