import { Component, Input, input } from '@angular/core';
import { AuthService } from '../../../../service/auth/auth-service.service';
import { HttpContext } from '@angular/common/http';
import { COMPONENT_IDENTIFIER } from '../../../../../shared/context-tokens';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrl: './dashbord.component.css',
})
export class DashbordComponent {
  constructor(private authService: AuthService) {
    this.getAllPost();
  }

  onClick(event: any) {
    console.log(event);
  }

  getAllPost() {
    const context = new HttpContext().set(
      COMPONENT_IDENTIFIER,
      'DashbordComponent'
    );
    this.authService.getPost(0, 10, context).subscribe({
      next: (res) => {},
      error: (error) => {
        console.log(error);
      },
    });
  }
}
