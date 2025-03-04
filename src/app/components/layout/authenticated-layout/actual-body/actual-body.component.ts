import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}
@Component({
  selector: "app-actual-body",
  templateUrl: "./actual-body.component.html",
  styleUrls: ["./actual-body.component.css"],
})
export class ActualBodyComponent implements OnInit {
  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  @Output() onBodyClicked: EventEmitter<boolean> = new EventEmitter();
  @Input() collapsed = false;
  @Input() screenWidth = 0;
  constructor() {}

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth > 1080) {
      this.collapsed = true;
      this.onToggleSideNav.emit({
        collapsed: this.collapsed,
        screenWidth: this.screenWidth,
      });
    }
    this.getBodyClass();
  }

  getBodyClass() {
    let styleClass = "";
    if (!this.collapsed && this.screenWidth > 1080) {
      styleClass = "body-trimmed";
    } else if (
      !this.collapsed &&
      this.screenWidth <= 1080 &&
      this.screenWidth > 0
    ) {
      styleClass = "body-md-screen";
    } else if (this.collapsed && this.screenWidth < 1080) {
      styleClass = "body-md-screen";
    }

    return styleClass;
  }

  closeSidenav() {
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({
      collapsed: this.collapsed,
      screenWidth: this.screenWidth,
    });
  }

  getEventOnBodyClick() {
    if (this.screenWidth <= 1080) {
      this.onBodyClicked.emit(true);
    }
  }
}
