import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-color-box',
  templateUrl: './color-box.component.html',
  styleUrl: './color-box.component.css',
})
export class ColorBoxComponent {
  @Input()
  gotColor: string = '';
}
