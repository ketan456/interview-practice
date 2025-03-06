import { Component } from '@angular/core';
import { LoadingService } from './service/loading/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'interview-practice';
  loading$: boolean = false;
  constructor(private loadingService: LoadingService) {}

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.loadingService.loading$.subscribe((res) => {
      this.loading$ = res;
    });
  }
}
