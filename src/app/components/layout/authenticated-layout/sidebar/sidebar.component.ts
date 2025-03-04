import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';
import { INavbarData } from './helper';
import { navbarData } from './sidenav-data';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { filter } from 'rxjs';
import { SubjectService } from '../../../../service/subject/subject.service';
interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

export interface links {
  linkName: string;
  linkRoute: string;
}

export interface sideBarMenu {
  parent: string;
  child: Array<links>;
  parentRoute?: string;
  icon: string;
}
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  sideBarData = navbarData;
  // adminSideBar = navbarData;
  showHamburger = false;
  userData: any;
  hideSubMenu: Boolean = false;
  isImgDefault: Boolean = false;
  userImage: any;
  isAdmin: Boolean = false;
  isVendor: Boolean = false;

  isSidebarOpen: boolean = true;
  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  @Input() collapsed: boolean = false;
  @Input() screenWidth: number = 0;
  @Input() bodyClicked: boolean = false;
  multiple: boolean = false;
  selectedParent: string | null = null;
  constructor(private router: Router, ) {
    // let userType: any = localStorage.getItem("userType");
    // let user: any = localStorage.getItem("userData");
    // let parsedData = JSON.parse(user);
    // console.log("this is sidebar data ", parsedData.orgType);
    // if (parsedData.orgType == "ADMIN") {
    //   this.isAdmin = true;
    //   this.isVendor = false;
    //   this.sideBarData = navbarData;
    //   console.log("this isn Admin sideBar", this.sideBarData);
    // } else if (parsedData.orgType == "BUYER") {
    //   this.isVendor = true;
    //   this.isAdmin = false;
    //   this.sideBarData = buyerNavbarData;
    //   console.log("this isn Buyer sideBar", this.sideBarData);
    // } else if (parsedData.orgType == "SUPPLIER") {
    //   this.isVendor = true;
    //   this.isAdmin = false;
    //   this.sideBarData = supplierNavbarData;
    //   console.log("this isn Buyer sideBar", this.sideBarData);
    // }
   
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    // 768
    if (this.screenWidth <= 1080) {
      this.collapsed = false;
      this.showHamburger = true;
      this.onToggleSideNav.emit({
        collapsed: this.collapsed,
        screenWidth: this.screenWidth,
      });
    } else {
      this.collapsed = true;
      this.showHamburger = false;
      this.onToggleSideNav.emit({
        collapsed: this.collapsed,
        screenWidth: this.screenWidth,
      });
    }
  }

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    // if (this.screenWidth <= 768) {
    //   this.collapsed = false;
    //   this.onToggleSideNav.emit({
    //     collapsed: this.collapsed,
    //     screenWidth: this.screenWidth,
    //   });
    // }

    if (this.screenWidth <= 1080) {
      this.collapsed = false;
      this.showHamburger = true;
      this.onToggleSideNav.emit({
        collapsed: this.collapsed,
        screenWidth: this.screenWidth,
      });
    } else {
      this.collapsed = true;
      this.onToggleSideNav.emit({
        collapsed: this.collapsed,
        screenWidth: this.screenWidth,
      });
    }
  }

  toggleCollapse() {
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({
      collapsed: this.collapsed,
      screenWidth: this.screenWidth,
    });
  }

  closeSidenav() {
    this.collapsed = false;
    this.onToggleSideNav.emit({
      collapsed: this.collapsed,
      screenWidth: this.screenWidth,
    });
  }

  showSideBar() {
    this.showHamburger = true;
    document.getElementById('sideBar')?.classList.add('sidebar-active');
  }

  hideSideBar() {
    this.showHamburger = false;
    document.getElementById('sideBar')?.classList.remove('sidebar-active');
  }

  handleClick(item: INavbarData): void {
    if (!this.multiple) {
      for (let modelItem of this.sideBarData) {
        if (item !== modelItem && modelItem.expanded) {
          modelItem.expanded = false;
        }
      }
    }
    item.expanded = !item.expanded;
    this.selectedParent = item.label;
  }

  mainMenu(item: INavbarData): void {
    if (!this.multiple) {
      for (let modelItem of this.sideBarData) {
        if (item !== modelItem && modelItem.expanded) {
          modelItem.expanded = false;
        }
      }
    }
    if (item.items?.length > 0) {
    } else {
      item.expanded = false;
      this.selectedParent = item.label;
    }
  }

  onMenuClick(event: MouseEvent): void {
    console.log('this is event mouse event ctrlKey', event.ctrlKey);
    console.log('this is event mouse event metaKey', event.metaKey);

    // if (event.ctrlKey || event.metaKey) {
    //   // Ctrl (or Command on Mac) + Mouse Click detected
    //   const url = this.router.serializeUrl(this.router.createUrlTree([path]));
    //   window.open(url, "_blank");
    //   event.preventDefault(); // Prevent default navigation
    // } else {
    //   // Regular click, navigate within the app
    //   this.router.navigate([path]);
    // }
  }

  checkActiveParent() {
    this.sideBarData.forEach((parent) => {
      parent.isActive = false;
      if (parent.items && parent.items.length > 0) {
        parent.items.forEach((child: any) => {
          if (this.router.isActive(child.routeLink, true)) {
            parent.isActive = true;
          }
        });
      } else if (this.router.isActive(parent.routeLink, true)) {
        parent.isActive = true;
      }
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['bodyClicked'] && changes['bodyClicked'].currentValue) {
      this.handleBodyClick();
    }
  }

  handleBodyClick(): void {
    // Handle the body click event here
    console.log('Body was clicked!');
    // this.collapsed = false
    this.closeSidenav();
  }
}
