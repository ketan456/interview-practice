import { Component, Input, input } from '@angular/core';
import { AuthService } from '../../../../service/auth/auth-service.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrl: './dashbord.component.css',
})
export class DashbordComponent {
  constructor(private authService: AuthService) {}

  onClick(event: any) {
    console.log(event);
  }
}
