import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SubjectService } from '../../../../service/subject/subject.service';

// import { AuthService } from "src/app/services/auth/auth.service";
interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();

  @Input() collapsed = false;
  @Input() screenWidth = 0;

  isExpanded: boolean = false;
  userDataRealtime: any;

  userDataPermission: any;
  hasSignoutPermission: boolean = false;
  count: number = 0;

  behaviorSubject="";

  constructor(private router: Router, private subjectService: SubjectService) {
    // this.authService.currentUserSubject.subscribe((res) => {
    //   this.userDataRealtime = res;
    // });
    let userData = localStorage.getItem('userDetails');
    if (userData != null) {
      this.userDataRealtime = JSON.parse(userData);
    }

    this.subjectService.subject$.subscribe((res) => {
      this.count = res;
    });

    this.subjectService.behavior$.subscribe((res) => {
      this.behaviorSubject = res;
    });
  }
  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }

  onDropdownClicked() {
    this.isExpanded = !this.isExpanded;
  }

  toggleSidebar() {
    console.log('collapsed before', this.collapsed);

    this.collapsed = !this.collapsed;

    console.log('collapsed after', this.collapsed);
    this.onToggleSideNav.emit({
      collapsed: this.collapsed,
      screenWidth: this.screenWidth,
    });
  }

  localLogout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
