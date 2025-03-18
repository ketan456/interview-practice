import { ChangeDetectorRef, Component, HostListener } from '@angular/core';
import { AuthService } from '../../../../service/auth/auth-service.service';
import { PostModel } from '../../../../../shared/models/post-model';
import { COMPONENT_IDENTIFIER } from '../../../../../shared/context-tokens';
import { HttpContext } from '@angular/common/http';

@Component({
  selector: 'app-infinite-scroller-view',
  templateUrl: './infinite-scroller-view.component.html',
  styleUrl: './infinite-scroller-view.component.css',
})
export class InfiniteScrollerViewComponent {
  postList: Array<PostModel> = [];
  updatedList: Array<any> = [];
  page: any = 1;
  size: any = 10;
  loading = false;

  totalPages = Infinity;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getAllPost();
  }

  onScroll(event: Event): void {
    // const element = event.target as HTMLElement;
    // const atBottom =
    //   element.scrollTop + element.clientHeight >= element.scrollHeight;
    // if (atBottom) {
    //   this.page++;
    //   console.log(this.page);

    //   this.getAllPost();
    // }
    if (this.loading || this.page >= this.totalPages) return;

    const element = event.target as HTMLElement;
    const threshold = 5;
    const atBottom =
      element.scrollTop + element.clientHeight >=
      element.scrollHeight - threshold;

    if (atBottom) {
      this.loading = true;
      this.page++;
      this.getAllPost();
    }
  }

  getAllPost() {
    const context = new HttpContext().set(
      COMPONENT_IDENTIFIER,
      'InfiniteScrollerViewComponent'
    );
    this.authService.getPost(this.page, this.size, context).subscribe({
      next: (res) => {
        this.postList = res;
        if (this.postList.length === 0) {
          this.totalPages = this.page - 1; // No more pages
          this.loading = false;
        } else {
          this.postList.forEach((value) => this.updatedList.push(value));
          this.loading = false;
        }
        console.log(this.postList);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
