import { Component, Input, input } from '@angular/core';
import { AuthService } from '../../../../service/auth/auth-service.service';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrl: './dashbord.component.css',
})
export class DashbordComponent {
  constructor(private authService: AuthService) {
    this.getAllPost();
  }

  getAllPost() {
    this.authService.getPost().subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  onClick(event: any) {
    console.log(event);
  }
}
