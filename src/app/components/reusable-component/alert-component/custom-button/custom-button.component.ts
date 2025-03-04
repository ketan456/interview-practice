import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './custom-button.component.html',
  styleUrl: './custom-button.component.css',
})
export class CustomButtonComponent {
  @Input()
  btnName: string = '';

  @Input()
  btnClass: string = '';

  @Output() onBtnClick = new EventEmitter<any>();

  onClick(event: any) {
    // console.log('Custom Btn click');
    this.onBtnClick.emit('eventdfsadfasfa');
  }
}
