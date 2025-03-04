import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-color-input',
  templateUrl: './color-input.component.html',
  styleUrl: './color-input.component.css'
})
export class ColorInputComponent {
  @Output() sendColor = new EventEmitter<any>();


  handleChange(event:any){
    this.sendColor.emit(event.target.value);
  }
}
