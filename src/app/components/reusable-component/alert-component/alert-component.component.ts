import { Component, Input } from '@angular/core';
import { DashbordComponent } from '../../authenticated/dashboard/dashbord/dashbord.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alert-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alert-component.component.html',
  styleUrl: './alert-component.component.css',
})
export class AlertComponentComponent {
  @Input()
  message: string = '';

  @Input()
  alertType: string = '';
}
