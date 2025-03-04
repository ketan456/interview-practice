import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}
interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}
@Component({
  selector: 'app-authenticated-layout',
  templateUrl: './authenticated-layout.component.html',
  styleUrl: './authenticated-layout.component.css',
})
export class AuthenticatedLayoutComponent {
  isSideNavCollapsed: boolean = false;
  bodyClicked: boolean = false;
  @Input() collapsed: boolean = false;
  @Input() screenWidth: number = 0;
  @Output() onBodyClicked = new EventEmitter<void>();

  constructor(private cdr: ChangeDetectorRef) {}
  ngOnInit(): void {}

  onToggleSideNav(data: SideNavToggle) {
    this.screenWidth = data.screenWidth;
    setTimeout(() => {
      this.isSideNavCollapsed = data.collapsed;
    }, 100);
  }

  ngAfterViewInit() {
    this.isSideNavCollapsed = this.isSideNavCollapsed;
    this.cdr.detectChanges();
  }

  catchBodyClicked(): void {
    this.bodyClicked = true;

    setTimeout(() => {
      this.bodyClicked = false;
    }, 0);
  }
}
